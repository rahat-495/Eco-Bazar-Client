
"use client"
import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    title : "" ,    
    status : "" ,    
    price : 0 ,    
    rating : 1 ,    
    quantity : 0 ,    
    image : "" ,   
    description : "" , 
} ;

const itemSlice = createSlice({
    name : "item" ,
    initialState ,
    reducers : {
        setItem : (state , action) => {
            state.title = action?.payload?.title ;
            state.image = action?.payload?.image ;
            state.description = action?.payload?.description ;
            state.price = action?.payload?.price ;
            state.quantity = action?.payload?.quantity ;
            state.rating = action?.payload?.rating ;
            state.status = action?.payload?.status ;
        }
    }
})

export const {setItem} = itemSlice.actions ;
export default itemSlice.reducer ;
