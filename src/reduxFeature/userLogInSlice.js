import { createSlice } from "@reduxjs/toolkit";
export let LOGINSTATUS=Object.freeze({
    SUCESSFULL:'sucessfull',
    IDEL:'idel',
    EMAIL:'error_email',
    PASSWORD:'error_PASSWORD',
    PROCESSING:'processing',
    LOGUSER:'loguser'
})


let logInUserSlice=createSlice({
    name:'loginuserManager',
    initialState:{
        loginuser :{email:''},
        status:LOGINSTATUS.IDEL
       },
    reducers:{
        addLogInUser:(state,action)=>{
            console.log(action.payload);
           state.loginuser.email=action.payload;
        },
        updateStatus:(state,action)=>{
         state.status=action.payload
        },
        removeLogInUser:(state,action)=>{
            state.loginuser={email:''}
        }
    }
})

export default logInUserSlice.reducer;
export let {addLogInUser,removeLogInUser,updateStatus}=logInUserSlice.actions;