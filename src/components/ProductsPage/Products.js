import React from 'react';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Filter from '../Filter/Filter'



class Products extends React.Component {
    render() {
        return (
            
            <div>
                <Navbar />
                <Filter/>
                <Footer />
            </div>


        )
    }
}
export default Products;