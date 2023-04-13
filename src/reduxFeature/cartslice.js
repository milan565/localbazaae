import { createSlice } from "@reduxjs/toolkit";

export let STATUS=Object.freeze({
    ADD:'added',
    REMOVE:'remove',
    ERROR:'error',
    IDEL:'idel',
    
})

let cartSlice=createSlice({
    name:'cartManager',
    initialState:{
        cartProducts:[],
        status:STATUS.IDEL
    },
    reducers:{
        addToCart:(state,action)=>{
            let {id}=action.payload;
           if(state.cartProducts.find((item)=>item.id===id))
           {
            alert('the product is already on your cart')
       
     
           }
           else{
            return({
                ...state,cartProducts:[...state.cartProducts,{...action.payload,cartQuantity:1}]
            })
           }
              
        },
        removeProduct:(state,action)=>{
            let afterRemove=state.cartProducts.filter((item)=>item.id!==action.payload);
          return({
            ...state,cartProducts:[...afterRemove]
          })
        },
        addProQuantity:(state,action)=>{
            state.cartProducts.forEach((item)=>{
                if(item.id===action.payload){
                    (item.cartQuantity===item.quantity)?(item.cartQuantity=item.cartQuantity):( item.cartQuantity=item.cartQuantity+1);
                    // item.cartQuantity=item.cartQuantity+1;
                }
             })
         },
        subProQuantity:(state,action)=>{
            state.cartProducts.forEach((item)=>{
                if(item.id===action.payload){
                    (item.cartQuantity===1)?(item.cartQuantity=1):(item.cartQuantity=item.cartQuantity-1)
                    
                }
             })
        }
    }
})
export let{addToCart,removeProduct,addProQuantity,subProQuantity}=cartSlice.actions;
export default cartSlice.reducer;
