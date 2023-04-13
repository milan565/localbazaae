import { configureStore } from "@reduxjs/toolkit";
// import  allProductSlice from './reduxFeature/allproductdata';
import cartslice from "./reduxFeature/cartslice";
import userRegistrationSlice from "./reduxFeature/userRegistrationSlice";
import logInUserSlice from './reduxFeature/userLogInSlice';
import menustyle from './reduxFeature/menustyleslice';
let store=configureStore({
    reducer:{
        cartManager: cartslice ,
        userManager: userRegistrationSlice,
        loginuserManager:logInUserSlice,
        menuStyleManager:menustyle
    }
})
export {store};