"use client"
import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    name : "" ,
    email : "" ,
    phone : "" ,
    profileIamge : "" ,
    role : "" ,
} ;

const userSlice = createSlice({
    name : "user" ,
    initialState ,
    reducers : {
        setUser : (state , action) => {
            state.name = action?.payload?.name ;
            state.email = action?.payload?.email ;
            state.phone = action?.payload?.phone ;
            state.profileIamge = action?.payload?.profileIamge ;
            state.role = action?.payload?.role ;
        }
    }
})

export const {setUser} = userSlice.actions ;
export default userSlice.reducer ;
