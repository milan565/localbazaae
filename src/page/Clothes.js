import React from 'react'
import '../compnonet/comstyle/header.css'
import Product from '../compnonet/Product'
import { useContext } from 'react'
import { Allproduct } from '../contextApi/ProductFetch'

export default function Clothes() {
  let clothesfetch=useContext(Allproduct);
  let clothesproduct=clothesfetch.filter((ele)=>(ele.category)==='clothe');

  return (
    <>
    <div className="pagesection_wrapper">
   <div className="container py-lg-4 py-md-3 py-2">
      <div className="row px-md-5 py-2">
      <h3 className='homeproducttitle'><span className='homepagetitlespan'>Our Products</span></h3>
      {
       clothesproduct.map((product)=>{
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
