import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../data/categories";


 const homeSlice = createSlice({
 
name:"home",

initialState:{
    allCategories:categories,
},
reducers:{}

})
export default homeSlice.reducer