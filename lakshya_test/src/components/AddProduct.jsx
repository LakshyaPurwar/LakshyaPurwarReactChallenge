import React, { useRef } from 'react';

import classes from './AddProduct.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../store/productSlice';

function AddProduct(props) {
  const titleRef = useRef('');
  const descriptionRef = useRef('');
  const priceRef = useRef('');
  const dispatch = useDispatch();

  function submitHandler(event) {
    event.preventDefault();

    
    const data  = {

    title : titleRef.current.value,
    description : descriptionRef.current.value,
    price : priceRef.current.valueOf,
    };

    dispatch(productActions.addProduct({}));



    

    
  }

 
  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='description'>Description</label>
        <textarea rows='5' id='opening-text' ref={descriptionRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor='date'>Price</label>
        <input type='text' id='date' ref={priceRef} />
      </div>
      <button>Add Product</button>
    </form>
  );
}

export default AddProduct;
