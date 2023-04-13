import React from 'react'
import '../compnonet/comstyle/header.css';
import { Allproduct } from '../contextApi/ProductFetch';
import { useContext } from 'react';
import Product from './Product';


export default function Productsuggestion(props) {
    let category=props.category;
    let id=props.id;
    let allproducts=useContext(Allproduct)
    let filterproduct=allproducts.filter((curr)=>curr.category===category&&curr.id!==id)
    
    
    
  return (
    <>
     <div className="container py-3">
    <div className="row px-md-5 py-2">
      <h3 className='homeproducttitle'><span className='homepagetitlespan'>Related Products</span></h3>
      {
        filterproduct.map((product)=>{
            return(
                <Product product={product} key={product.id}/>
            )
        })
      }
    </div>
  </div>
    </>
  )
}
