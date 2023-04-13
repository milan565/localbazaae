import { createSlice } from "@reduxjs/toolkit";


let initialstore={
    allproduct:[]
}
let allProductSlice=createSlice({
    name:'allproduct',
    initialState:initialstore,
    reducers:{
        setAllProduct:(state,action)=>{
            console.log(action.payload);
            state.allproduct=[...action.payload]
        }
    }
})
export let {setAllProduct}=allProductSlice.actions;
export default allProductSlice.reducer;