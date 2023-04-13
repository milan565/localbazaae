import React from 'react'
import { Link } from 'react-router-dom';
import './comstyle/single.css';
import { useContext } from 'react';
import {Allproduct} from '../contextApi/ProductFetch'
import { useState } from 'react';
import { addToCart } from '../reduxFeature/cartslice';
import { useDispatch } from 'react-redux';
// import { useGlobalcart } from '../contextApi/Cartcontext';
// import Productsuggestion from './Productsuggestion';


export default function Single(props) {
  let dispatch=useDispatch();
  let productlist=useContext(Allproduct);
  let proid=props.id;
  let matchproduct=productlist.filter((product)=>(product.id==proid));
  let[{id,proName,price,image,brand,category,quantity,weight,avibility,images}]=matchproduct;
  let[imageurl,setImageurl]=useState(image);
  // let {addToCart}=useGlobalcart();
  // let [addproduct]=matchproduct;
  let addpro={id,proName,price,image,brand,quantity,weight,avibility};
 
 let handleAddProduct=(item)=>{
  dispatch(addToCart(item));
 }
 
    
  return (
    <>
    <section className='singlesection'>
     <div className="container">
      <div className="row d-flex justify-content-center py-lg-5 py-3 px-lg-5">
          <div className="col-xl-10 col-12">
              <div className="row py-lg-5 py-3 singleproductrow ">
                <div className="col-sm-6 px-lg-5 px-3 singleproductimage">
                  <div className="singleproductimagecontainer">
                    <img src={imageurl} alt="single product image"/>
                  </div>
                  <div className="imagecarasolebox">
                    <div className="row  imagecarosolrow">
                      {
                        images.map((proimage)=>{
                          return(
                          <div className="col-3 singleproductcarouselimage " key={proimage.id} onClick={()=>{
                            setImageurl(proimage.url);
                           
                          }}>
                             {/* <div className="col-3 singleproductcarouselimage " onClick={()=>manageimage(proimage.url)}> */}
                            
                          <img src={proimage.url} alt="displayimage" className='img-fluid' />
                        </div>
                          )
                        })
                      }
                     
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 px-3  singleproductdetails">
                    <div className="singleproductdetailscontainer">
                      <div className="singleproductdiv ">
                        <h3><span className='singleproducname'>{proName}</span> <span className='singleproductdata'></span></h3>
                      </div>
                      <div className="singleproductdiv ">
                        <h4><span className='singleproducttitle'>Nrs :</span><span className='singleproductdata'>{price}</span> </h4>
                      </div>
                      <div className="singleproductdiv ">
                        <h4><span className='singleproducttitle'>Brand :</span><span className='singleproductdata'>{brand}</span> </h4>
                      </div>
                      <div className="singleproductdiv ">
                        <h4><span className='singleproducttitle'>Category : </span><span className='singleproductdata'>{category}</span> </h4>
                      </div>
                      <div className="singleproductdiv ">
                        <h4><span className='singleproducttitle'>Weight :</span><span className='singleproductdata'>{weight}</span> </h4>
                      </div>
                      <div className="singleproductdiv ">
                        <h4><span className='singleproducttitle'>Avibility :</span><span className='singleproductdata'>{avibility}</span> </h4>
                      </div>
                      <div className="singleproductdiv">
                        <p><span className='singleproducttitle'>Product Details : </span><span className='singleproductdata'></span> </p>
                      </div>
                    </div>
                    <div className="singleproductcal px-lg-4 px-sm-1 px-3 py-2">
                      <div className="singleproductcartbox singleprodutaddcard">
                        <Link to="" className='singleproductlink addcardlink h-100 ' onClick={()=>handleAddProduct(addpro)}>
                          <span className='singleproductlinkcontent'>Add to Cart</span>
                        </Link>
                      </div>
                      <div className="singleproductcartbox singleproductbuy">
                        <Link to="/buy" className='singleproductlink buylink h-100'>
                          <span>Buy Now</span>
                        </Link>
                      </div>
                    </div>
                </div>
            </div> 
          </div>
      </div>
     </div>
     </section>

     {/* <Productsuggestion category={category} id={id}/> */}
    </>
  )
}
