import React from 'react'
import { useState,useEffect } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { GrAdd,GrFormSubtract } from "react-icons/gr";
import { useDispatch } from 'react-redux';
import {removeProduct,addProQuantity,subProQuantity} from '../reduxFeature/cartslice';


export default function Cartsingleproduct(props) {
  let dispatch=useDispatch();
  let{id,proName,price,image,brand,category,quantity,weight,avibility,cartQuantity}=props.product;
   let handleRemove=(id)=>{
    dispatch(removeProduct(id));
   }
   let handleIncProduct=(id)=>{
    dispatch(addProQuantity(id))
   }
  let handleDecProduct=(id)=>{
    dispatch(subProQuantity(id));
  }
  return (
    <>
             <div className="row py-4 cartsingle_productrow my-3">
                  <div className="col-4 h-100 cartimagecol">
                    <div className="cartimageholder py-2 px-2">
                      <Link to={`/singlepage/${id}`} >
                      <img src={image} alt="cartimage" className='img-fluid'/>
                      </Link>
                    </div>
                  </div>
                  <div className="col-8 h-100 cartproductdetails">
                     <div className="row h-100">
                      <div className="col-6 cart_innercol leftcartproductdetails">
                        <div className="lefttop_cartdetails">
                          <h4 className='cart_productname'>{proName}</h4>
                          <p><span className='cartcode py-2 '>product code :</span>{id}</p>
                          <p className='cartproduct_priceparag'><span className='px-1 cartproduct_price'>Rs :</span>{price}</p>
                        </div>
                        <div className="leftbotom_cartdetails">
                          <h6 ><button className='cartSin_productRemovebtn' onClick={()=>handleRemove(id)}>
                          <span className='cartremove_button'><span className="px-1"> <AiFillDelete/></span>Remove Item</span>
                          </button>
                           </h6>
                        </div>
                       
                      </div>
                      <div className="col-6 cart_innercol rightcartproductdetails">
                          <div className="righttop_productdetais cartdetails_allignment">
                          <nav aria-label="Page navigation example">
                            <ul className="pagination">
                              <li className="page-item" onClick={()=>handleIncProduct(id)}><span className="page-link pagenationicon" ><GrAdd/></span></li>
                            <li className="page-item"><span className="page-link" >{cartQuantity}</span></li>
                              <li className="page-item" onClick={()=>handleDecProduct(id)}><span className="page-link pagenationicon"><GrFormSubtract/></span></li>
                            </ul>
                          </nav>
                          </div>
                          <div className="avibility_box d-flex justify-content-end">
                            <p className='cartavibility'>{avibility}</p>
                            </div>
                          <div className="rightbottom_productdetais cartdetails_allignment">
                            
                            
                            <p className='totalproduct_priceparag'><span className='px-1 totalproduct_price'>Total Amount :{cartQuantity*price}</span></p>
                          </div>
                        </div>
                     </div>
                  </div>
                </div>
    </>
  )
}
