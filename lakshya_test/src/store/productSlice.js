import { createSlice } from "@reduxjs/toolkit";
const initialProductsState = {products:[]};
const productSlice = createSlice({
    name : 'counter',
    initialState :initialProductsState ,
    reducers: {
       setProducts(state , action){
        state.products = action.payload;
       },
       addProduct(state , action){
        state.products.push(action.payload);
       },
       deleteProduct(state , action){
            state.products = state.products.filter((product , index)=>(index!=action.payload));
       },
    //    updateMovie(state , action){

    
    } 
})

export const productActions = productSlice.actions;
export default productSlice.reducer;