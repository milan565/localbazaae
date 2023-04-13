import { createSlice } from "@reduxjs/toolkit";
let initialstyle={
    menuState:false
}
let menustyle=createSlice({
    name:"menuStyleManager",
    initialState:initialstyle,
    reducers:{
        displayReducer:(state,action)=>{
            return({
                ...state,menuState:action.payload})
        },
        displaynonReducer:(state,action)=>{
            return({
                ...state,menuState:action.payload})
        }
    }
})

export default menustyle.reducer;
export let{displayReducer,displaynonReducer}=menustyle.actions;