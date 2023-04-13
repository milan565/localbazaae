import React from 'react'
// import '../compnonet/comstyle/header.css'
import Product from '../compnonet/Product'
import { useContext } from 'react'
import { Allproduct } from '../contextApi/ProductFetch'

import Carouseltest from '../compnonet/Carouseltest'
import '../compnonet/comstyle/pagestyle.css'
// import CarouselSlider from '../compnonet/Carouselslider'
import { productItem } from '../contextApi/ProductApi'



export default function Home() {
  let disproduct=useContext(Allproduct);
 
  
  return (
    <>
       {/* <CarouselSlider/> */}
       <Carouseltest/>
       <div className="pagesection_wrapper">
        <div className="container py-lg-4 py-md-3 py-2">
          <div className="row px-md-5 py-2">
            <h3 className='homeproducttitle'><span className='homepagetitlespan'>Our Products</span></h3>
            {
              disproduct.map((product)=>{
                return(
                  <Product product={product} key={product.id}/>
                )
              
              })
            }
          
          </div>
        </div>
  </div>
    
    </>
  )
}
