import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props.product);

    const {name,img,seller,price,stock} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br/>
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <p><small>Only{stock} left in stock - Order soon</small></p>
                <button className='main-button'> <FontAwesomeIcon icon={faCartArrowDown} /> add to cart</button>

            </div>
            
        </div>
    );
};

export default Product;