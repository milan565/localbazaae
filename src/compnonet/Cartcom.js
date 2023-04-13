import React from 'react'

import './comstyle/cartcomp.css';
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Cartsingleproduct from './Cartsingleproduct';
import { useSelector } from 'react-redux';



export default function Cartcom() {
 
  let{cartProducts}=useSelector((state)=>state.cartManager);
  let totalCartAmount=cartProducts.reduce((sum,item)=>sum+=(item.cartQuantity*item.price),0);

  return (
    <>
      <section className='cartboxsection py-4'>
        <div className="container">
            <div className="row cartrow">
                <h3 className='carttitle'><span>SHOPPING CART</span></h3>
            </div>
            <div className="row py-3 cartrow">
              <div className="col-lg-8 col-12 cartcol py-3 px-3">
                <h3 className='cartproducttitle'>Product</h3>
                {
                  (cartProducts.length!==0)?(  cartProducts.map((currpro)=>{
                    return(
                        <Cartsingleproduct product={currpro} key={currpro.id}/>
                    )
                  })):(<h4 className='emptyCart'>your cart is empty </h4>)
                }
                {/* {
                  
                  cartProducts.map((currpro)=>{
                    return(
                        <Cartsingleproduct product={currpro} key={currpro.id}/>
                    )
                  })
                } */}
                
              </div>
              <div className="col-lg-4 my-lg-0 my-3 col-12 px-lg-3 px-0">
                <div className="totalammount_section py-3 px-lg-4 px-3">
                  <h5 className='totalammount_title'>The Total Amount Of</h5>
                  <div className="top_totalammountsection">
                    <div className="inner_totalammount">
                      <p className='inner_totalparag'>Product amount</p>
                      <p className='inner_totalparag'>Rs : <span>{totalCartAmount}</span></p>
                    </div>
                    <div className="inner_totalammount">
                       <p className='inner_totalparag'>Shipping Charge</p>
                      <p className='inner_totalparag'>Rs : <span></span></p>
                    </div>
                  </div>
                  <div className="botton_totalammountsection py-3">
                  <div className="inner_totalammount">
                       <p className='inner_totalparag '>The total amount of(include VAT)</p>
                      <p className='inner_totalparag'>Rs : <span>{totalCartAmount}</span></p>
                    </div>
                    <div className="checkout_section py-2">
                      <Link to='' >
                        <button className='chekout_link'><span>chekout</span></button></Link>
                    </div>
                  </div>
                </div>
                <div className="code_section py-1 px-lg-4 px-3 my-3">
                <h5 className='totalammount_title'>Add a discount code(optional)</h5>
                <div className="codeinput">
                <input type="tel" className='codebox' placeholder='code'/>
                <p className='codeinfo'>Enter the code to get discount</p>
                </div>
                <div className="codeapply py-2">
                <button className='applybutton'><span>Apply</span></button>
                </div>
               
                </div>
                <div className="delivert_section py-1 px-lg-4 px-3">
                <h5 className='totalammount_title'>Expected delivery date</h5>
                <p>2022/12/13</p>
                </div>
              </div>
            </div>
        </div>
      </section>
    </>
  )
}
