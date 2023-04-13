let initialCart={
    products:[],
    
}

let cartReducer=(state,action)=>{
let{type,payload}=action;
switch(type){
    case'ADD_TO_CART':
   
    return({
        ...state,products:[...state.products,{...payload,cartQuantity:1}]
    })
    case'REMOVE_FROM_CART':
    return({
        ...state,products:[...payload]
    })
    case'UPDATE_QUANTITY':
    let{quantity,id}=payload;
    return({
        ...state,products:state.products.filter((curr)=>curr.id===id?curr.cartQuantity=quantity:curr.cartQuantity)
    })
   
}
    return(state)
}

export {initialCart,cartReducer};