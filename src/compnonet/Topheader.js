import React from 'react'
import './comstyle/header.css'
import './comstyle/headerresponsive.css'
import { FaFacebookF,FaYoutube,FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {removeLogInUser} from '../reduxFeature/userLogInSlice';

export default function Topheader() {
  let dispatch=useDispatch();
  let{status,loginuser}=useSelector((state)=>state.loginuserManager);
  let handelLogOut=()=>{
  dispatch(removeLogInUser());
  }
  return (
    <>
      <div className="headersection">
        <div className="container headercontainer">
            <div className="row throw">
                <div className="col-6">
                    <ul className='topheadericon d-flex  justify-content-start'> 
                        <li className='mx-lg-2 mx-1'>
                            <a href="#" className='facebookicon px-1 icon'><FaFacebookF/></a>
                            </li>
                            <li className='mx-md-2 mx-1'>
                                <a href="#" className='instragramicon px-1 icon'><FaInstagram/></a>
                                </li>
                        <li className='mx-md-2 mx-1'>
                            <a href="#" className='youtubeicon px-1 icon'><FaYoutube/></a>
                            </li>
                       
                    </ul>
                </div>
                <div className="col-6">
                    <ul className='topheaderrightlink d-flex justify-content-end align-items-center'>
                        <li className='mx-sm-1 thrfristlink'>
                            <a href="#" className='thlink '>sell on localBazar</a>
                         </li>
                        <li className='mx-sm-1'>
                          {(loginuser.email==="")?(<Link to='/useraccount'  ><span className='thlink'>Log in</span> </Link>):(<button className='logout-button' onClick={handelLogOut}><span className='thlink'>Log Out</span></button>)} 
                            </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
