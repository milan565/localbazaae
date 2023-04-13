import { createSlice } from "@reduxjs/toolkit";

export let USERSTATUS=Object.freeze({
    IDEL:'idel',
    PROCESSING:'processing',
    SUCCESFULL:'succesfull',
    ERROR:'error',
    REGISTER:'registerEmail'
})

let userRegistrationSlice=createSlice({
    name:"userManager",
    initialState:{
        userData:[],
        userStatus:USERSTATUS.IDEL
    },
    reducers:{
        addUser:(state,action)=>{
            return({
                ...state,userData:[...state.userData,action.payload]
            })
        },
        updateUserStatus:(state,action)=>{
            state.userStatus=action.payload
        }
    }
})

export let{addUser,updateUserStatus}=userRegistrationSlice.actions;
export default userRegistrationSlice.reducer;