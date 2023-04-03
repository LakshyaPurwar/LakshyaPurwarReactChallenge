import React from 'react';


import classes from './Product.module.css';
import { productActions } from '../store/productSlice';
import { useDispatch } from 'react-redux';



const Product = ({id=999 , title , description , price , thumbnail="Not working" , index}) => {
  const dispatch = useDispatch();
  
  const deleteItem = ()=>{
      dispatch(productActions.deleteProduct(index));
  }
  return (
    <li className={classes.product} onClick={deleteItem}>
      <h2>{title}</h2>
      <h3>{id}</h3>
      <p>{description}</p>
      <p>{price}</p>
    <img src={thumbnail}></img>
    </li>
  );
};

export default Product;
