import React from 'react';
import './Product.css';
import {FaCartPlus} from 'react-icons/fa';


const Product = (props) => {
    // console.log(props.product)
    const {img,name,seller,price,stock} =props.product
    return (
        <div className="product"> 
            <div>
                <img src={img} alt="img" />
            </div>
            <div className="product-name">
            <h4>{name}</h4>
             <p><small>by:{seller}</small></p>
            <p>$: {price}</p>
            <p><span>only {stock} left in stock - order soon</span></p>
            <button className="main-btn" onClick={()=>props.HandheldAddProduct(props.product)} > 
            <FaCartPlus/> add to cart</button>
            </div>        
           
        </div>
    );
};

export default Product;