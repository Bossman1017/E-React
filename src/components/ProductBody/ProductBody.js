import React from 'react';

const ProductBody = ({ item }) => (

    <div className="Games" style={{ backgroundColor: item.color }}>
        <h2 className="Products__header">{item.name}</h2>
        <img className="product-img" src={item.image} alt={item.alt} />
        <p>{item.description}</p>
        <p>{item.cost}</p>
    </div>

)
export default ProductBody;