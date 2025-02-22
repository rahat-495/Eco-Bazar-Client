
"use client"
import { configureStore } from "@reduxjs/toolkit";
import userReducer from '@/app/redux/features/user/userSlice'
import itemReducer from '@/app/redux/features/item/itemSlice'

export const store = configureStore({
    reducer : {
        user : userReducer ,
        item : itemReducer ,
    } ,
})