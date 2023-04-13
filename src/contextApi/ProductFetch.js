import React, { createContext, useState } from 'react'
import {productItem} from './ProductApi'

let Allproduct=createContext();
 function ProductFetch(props) {
    let[product]=useState(productItem);
  return (
    <>
      <Allproduct.Provider value={product}>
        {props.children}
      </Allproduct.Provider>
    </>
  )
}
export default ProductFetch;
export {Allproduct};
