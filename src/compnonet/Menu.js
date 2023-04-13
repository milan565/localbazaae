import React from 'react'
import { Link } from 'react-router-dom'
import './comstyle/header.css'
import './comstyle/headerresponsive.css'
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch,useSelector } from 'react-redux';
import {displaynonReducer} from '../reduxFeature/menustyleslice';


  export default function Menu() {
    let dispatch=useDispatch();
    let{menuState}=useSelector((state)=>state.menuStyleManager);
    
    let handleclosemenu=()=>{
        dispatch(displaynonReducer(false))
    }
  return (
    <>
     <div className={`menusection ${(menuState!==true)?("menudisnon"):("menudis")}`}>
        <div className="container menucontainer h-100">
            <div className="row menurow h-100">
                <span className='menucloseicon' onClick={handleclosemenu}><AiOutlineClose className='menuclose'></AiOutlineClose></span>
                <ul className='d-flex h-100 sm-align-items-center navul '>
                    <li className='navli mr-xl-5 mr-lg-4 mx-md-3 '> 
                        <Link className='navitem' to="/" onClick={handleclosemenu}>Home</Link>
                    </li>
                    <li className='navli mx-xl-5 mr-lg-4 mx-md-3 '>
                        <Link className='navitem' to="/grocery"  onClick={handleclosemenu}>Grocery</Link>
                    </li>
                    <li className='navli mx-xl-5 mr-lg-4 mx-md-3 '>
                        <Link className='navitem' to="/dairy" onClick={handleclosemenu}>Dairy</Link>
                    </li>
                    <li className='navli mx-xl-5 mr-lg-4 mx-md-3 '>
                        <Link className='navitem' to="/handcraft" onClick={handleclosemenu}>HandCraft</Link>
                    </li>
                    <li className='navli mx-xl-5 mr-lg-4 mx-md-3 '>
                        <Link className='navitem' to="/herbal" onClick={handleclosemenu}>Herbal products</Link>
                    </li>
                    <li className='navli mx-xl-5 mr-lg-4 mx-md-3 '>
                        <Link className='navitem' to="/clothes" onClick={handleclosemenu}>Clothes</Link>
                    </li>
                    <li className='navli mx-xl-5 mr-lg-4 mx-md-3 '>
                        <Link className='navitem' to="/about" onClick={handleclosemenu}>About Us</Link>
                    </li>
                </ul>
            </div>
        </div>
     </div>
    </>
  )
}
