import React from 'react'
import { Link } from 'react-router-dom'
import './comstyle/productstyle.css'

export default function Product(props) {
 
  let{id,proName,price,image,brand}=props.product;
  
  return (
    <>
      
              <div className="col-lg-3 col-md-4 col-6 product px-xl-4 px-md-2 px-sm-2 px-2 my-4">
              <div className="productbox">
                <div className="productImage py-2 px-2 ">
                   <img src={image} alt="product image" className='img-fluid showProductImage'/>
                    
                </div>
                <div className="productdetails d-flex justify-content-between py-3 px-2">
                    <div className="leftProductdetails">
                        <p className='productName'>{proName}</p>
                        <h5 className='moreProductDetails'>+<span className='px-1'>View Product </span> </h5>
                    </div>
                    <div className="rightProductdetails">
                        <p className='productPrice'>Rs :<span className='px-1'>{price}</span></p>
                    </div>
                </div>
                {/* <Link to={`/singlepage/${id}`} className="singleproductdirect"></Link> */}
                <Link to={`/singlepage/${proName}`} className="singleproductdirect"></Link>
              </div>
            </div>
          
            
       
    </>
  )
}
