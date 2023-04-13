import React from 'react'
import { Link } from 'react-router-dom'
import './comstyle/footer.css'
import { FaPhoneAlt,FaFacebookF,FaInstagram,FaYoutube } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Footer() {
  return (
    <>
       <section>
        <div className="topfooter py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-6 pr-md-5 px-4 footercol">
                        <h3 className='footertitle'>Abou Us</h3>
                        <p className='footerpara'>Nepal Emarket takes your shopping experience to next level with 
                        the convenience of buying local products within a few clicks.
                        <span className='footerlink d-inline-block'><Link to="/">click me</Link></span></p>
                    </div>
                    <div className="col-md-2 col-6 px-4 footercol">
                    <h3 className='footertitle'>Top Menu</h3>  
                    <ul className='footerul'>
                    <li className='footerli'>
                            <Link to="/" className='footerlink py-1'>Home</Link>
                        </li>
                        <li className='footerli'>
                            <Link to="/grocery" className='footerlink py-1'>Grocery</Link>
                        </li>
                        <li className='footerli'>
                            <Link to="/dairy" className='footerlink py-1'>Dairy</Link>
                        </li>
                        <li className='footerli'>
                            <Link to="/herbal" className='footerlink py-1'>Herbal Products</Link>
                        </li>
                        <li className='footerli'>
                            <Link to="/handcraft" className='footerlink py-1'>HandCraft</Link>
                        </li>
                        <li className='footerli'>
                            <Link to="/clothes" className='footerlink py-1'>Clothes</Link>
                        </li>
                        <li className='footerli'>
                            <Link to="/about" className='footerlink py-1'>About</Link>
                        </li>
                    </ul>
                    </div>
                    <div className="col-md-2 col-6 px-4 footercol">
                        <h3 className='footertitle'>My Account</h3>   
                        <ul className='footerul'>
                            <li className='footerli'>
                                <Link to="/" className='footerlink'>My Account</Link>
                            </li>
                            <li className='footerli'>
                                <Link to="/" className='footerlink'>Shopping Cart</Link>
                            </li>
                        
                        </ul> 
                    </div>
                    <div className="col-md-4 col-6 px-4 footercol">
                      <h3 className='footertitle'>Customer Support</h3> 
                      <ul className='footerul'>
                            <li className='footerli'>
                               <span className='footerspan'>contact :</span> <Link to="/" className='footerlink'><FaPhoneAlt className='footerContactIcon'/> 9813456777</Link>
                            </li>
                            <li className='footerli'>
                            <span className='footerspan'>Email :</span> <Link to="/" className='footerlink'><HiMail className='footerContactIcon'/> milanaryal@gmail.com</Link>
                            </li>
                        
                        </ul>  
                    </div>
                </div>
            </div>
        </div>
        <div className="bottomfooter">
            <div className="container footerLowerContainer h-100">
                <div className="row footerLowerRow h-100">
                    <ul className='footerLowerUl d-flex h-100 justify-content-center align-items-center'>
                        <li className='footerLowerLi mx-3'>
                            <Link className='footerLowerLink' to="/"><FaFacebookF className='fotericon facebook'/></Link>
                        </li>
                        <li className='footerLowerLi mx-3'>
                            <Link className='footerLowerLink' to="/"><FaInstagram className='fotericon instragram'/></Link>
                        </li>
                        <li className='footerLowerLi mx-3'>
                            <Link className='footerLowerLink' to="/"><FaYoutube className='fotericon youtube'/></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
       </section>
    </>
  )
}
