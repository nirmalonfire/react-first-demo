import React, { useState } from 'react';
import ProductDate from './ProductDate';
import './ProductItem.css'
import Card from './Card';

function ProductItem(props){

const[title, setTitle] = useState(props.title);

function clickHandler(){
    setTitle('popcorn');
    
}

    return(
        <Card className="products-item">
            <ProductDate  date={props.date}/>
            <div className='products-item__description'>
                <h2>{title}</h2>
            </div>
            <button onClick={clickHandler}>Add to Cart</button>
        </Card>
    )

}
export default ProductItem;