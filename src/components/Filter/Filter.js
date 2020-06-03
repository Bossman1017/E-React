import React from 'react';
import Data from '../ProductsPage/assets/ProductsDatabase.json'
import ProductBody from '../ProductBody/ProductBody'
class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "default",
            price:"default"
        }
    }
    handlePriceDropdownSelect = (event) => {
        this.setState({
            price: event.target.value,
            type:event.target.value
        })
    }

    render() {
        const{type, price} = this.state;
        return(
            <div>
                <div className="product__div">
                <label id="product_filter">Filter By:</label>
                <select className = "option_1" value = {type} onChange={this.handlePriceDropdownSelect}>
                    <p></p>
                    <option > Brand </option>
                    <option value="Special"> Bundle Pack</option>
                    <option value="NewSchool"> New </option>
                    <option value="OldSchool">Classic</option>
                    <option value="Consoles">Console</option>
                </select>
                <select className= "option_2" value = {price} onChange={this.handlePriceDropdownSelect}>
                    <p></p>
                    <option> Price </option>
                    <option value="Low"> Low </option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    </select>
                    </div>
                    {Data.map((item) => {
          if (type === 'default' &&  price === 'default') {
            return <ProductBody item={item}/>
          } else if (type === item.type && price === item.price) {
            return <ProductBody item={item} />
          } else if (type === item.type || price === item.price) {
            return <ProductBody item={item} />
          } 
          
        })}
            </div>
        )
    }
}

export default Filter;