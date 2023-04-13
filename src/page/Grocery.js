import React from 'react'
import '../compnonet/comstyle/header.css'
import Product from '../compnonet/Product'
import { useContext } from 'react'
import { Allproduct } from '../contextApi/ProductFetch'


export default function Grocery() {
  let fetchProduct=useContext(Allproduct);
  let groceryProduct=fetchProduct.filter((ele)=>(ele.category==='grocery'));
  console.log(groceryProduct);
  
  return (
    <>
     <div className="pagesection_wrapper">
    <div className="container py-lg-4 py-md-3 py-2">
      <div className="row px-md-5 py-2">
      <h3 className='homeproducttitle'><span className='homepagetitlespan'>Our Products</span></h3>
      {
        groceryProduct.map((product)=>{
          return(
           <Product product={product}/> 
          )
        })
      }
      
      </div>
    </div>
    </div>
    </>
  )
}
