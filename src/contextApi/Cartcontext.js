import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { initialCart,cartReducer } from "./cartReducer";

let Cartcontext=createContext();

let Cartprovider=({children})=>{
    let[state,dispatch]=useReducer(cartReducer,initialCart);
    
    // function to add produc in cart
     let addToCart=(product)=>{
        let {id,proName,price,image,brand,category,quantity,weight}=product;
          let productproperty={id,proName,price,image,brand,category,quantity,weight}
          if(state.products.find((curr)=>curr.id==product.id)){
            alert('The product is already in your cart');
          }
          else{
            dispatch({
                type:'ADD_TO_CART',
                payload:{...productproperty}
            })
          }
      
     }
    //  function to remove product from cart
    let removeFromCart=(product)=>{
        let cartProducts=state.products;
        let afterRemove=cartProducts.filter((curr)=>curr.id!==product.id);
        dispatch({
            type:'REMOVE_FROM_CART',
            payload:[...afterRemove]
        })
    }
    // function to update cart quantity
    let updateQuantity=(quantity,id)=>{
        dispatch({
            type:'UPDATE_QUANTITY',
            payload:{quantity,id}
        })
    }
    
    let value={
        products:state.products,
        total:state.total,
        addToCart,
        removeFromCart,
        updateQuantity
    }
    return(
        <Cartcontext.Provider value={{...value}}>
            {children}
        </Cartcontext.Provider>
    )
}
let useGlobalcart=()=>{
    let cartgobalcontext=useContext(Cartcontext);
    if(cartgobalcontext==undefined){
        throw new Error("useGlobalcart must be inside cartcontext")
    }
    else{
        return(cartgobalcontext)
    }
}
export {Cartprovider};
export {useGlobalcart};