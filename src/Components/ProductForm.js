import { useState } from 'react';
import './ProductForm.css';

function ProductForm(props){

    const[title, setTitle] = useState('');
    const[date, setDate] = useState('');


    function titleChangeHandler(event){
        setTitle(event.target.value);
        console.log(event.target.value)
    }

    function dateChangeHandler(event){
        setDate(event.target.value);
        console.log(event.target.value)
    }

    function submitHandler(event){
        event.preventDefault();

        const productData = {
            title :title,
            date : date
        }
        // console.log(productData)
        props.onSaveProduct(productData);

        setTitle('');
        setDate('');
    }

return (
    <form onSubmit={submitHandler}>
        <div className='new-product-title'>
            <label>Title</label>
            <input type="text" value={title} onChange={titleChangeHandler}></input>
        </div>
        <div className='new-product-date'>
            <label>Date</label>
            <input type='date' min='2023-01-01' max='2023-12-12' value={date} onChange={dateChangeHandler}></input>
        </div>
        <div className='new-product-button'>
            <button type='submit'>Add Product</button>
        </div>
    </form>
)
}

export default ProductForm;