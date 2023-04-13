import React from 'react'
import './comstyle/header.css'
import './comstyle/headerresponsive.css'
import {Link} from 'react-router-dom'
import {FaUserAlt,FaShoppingCart} from 'react-icons/fa'
import {AiOutlineMenu} from 'react-icons/ai'
import { useSelector } from 'react-redux'
import {displayReducer} from '../reduxFeature/menustyleslice';
import { useDispatch } from 'react-redux'
import Searchbar from './Searchbar'



export default function Midheader() {
  let dispatch=useDispatch();
  let handlemenuclick=()=>{
    dispatch(displayReducer(true))
  }
  let{cartProducts}=useSelector((state)=>state.cartManager);
  // let{products}=useGlobalcart();
 let totalcart=cartProducts.reduce((sum,item)=>sum+=item.cartQuantity,0);
  return (
    <>
       <div className="midheadersection">
        <div className="container logoarea">
            <div className="row pl-3 logobox d-flex align-items-center">
                <div className="col-lg-3 col-md-3 col-sm-3 col-12 logosection">
                  <Link to="/">
                  <h1 className=''>
                    <span className="logoicon"><span className='logoupper'>L</span>ocal<span className='logoupper'>B</span>azaar</span></h1>
                  </Link>
                </div>
                <div className="col-lg-5 col-md-7 col-sm-6 col-8 searchsection">
                  <Searchbar/>
                </div>
                <div className="col-lg-4 col-md-2 col-sm-3 col-4 cardsection">
                  <ul className='d-flex justify-content-end'>
                    <li className='accountsection px-3  fristaccount'>
                      <Link to='/useraccount' className='headerlink'>
                        <div className="accountbox">
                          <FaUserAlt className='accounticon'/>
                          {/* <span className='px-1  accounttext'>My Account</span> */}
                          </div>
                      </Link>
                    </li>
                    <li className='cartsection  px-3'>
                    <Link to='cart' className='headerlink'>
                        <div className="accountbox">
                          <FaShoppingCart className='accounticon'/>
                          {/* <span className='px-1 accounttext'>My Cart</span> */}
                          <span className='cartcount'>{totalcart}</span>
                          </div>
                      </Link>
                    </li>
                    <li className='hambergunmenu'><span onClick={handlemenuclick}><AiOutlineMenu className='hambericon'/></span></li>
                  </ul>
                  
                </div>
            </div>
        </div>
       </div>
      
    </>
  )
}
