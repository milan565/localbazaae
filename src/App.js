import React from 'react'
import './App.css'
import About from './page/About'
import Clothes from './page/Clothes'
import Dairy from './page/Dairy'
import Grocery from './page/Grocery'
import Handcraft from './page/Handcraft'
import Herbal from './page/Herbal'
import Home from './page/Home'
import {Routes,Route} from 'react-router-dom'
import Errorpage from './page/Errorpage'
import Topheader from './compnonet/Topheader'
import Midheader from './compnonet/Midheader'
import Menu from './compnonet/Menu'
// import Single from './compnonet/Single'
import Footer from './compnonet/Footer'
// import Single from './compnonet/Single'
import Cart from './page/Cart'
import Login from './page/Login'
import Signin from './page/Signin'
import Singlepage from './page/Singlepage'
import Searchpage from './page/Searchpage'
import Userdaskboard from './page/Userdaskboard'
import Useraccountinfoc from './compnonet/Useraccountinfoc'
import Userorder from './compnonet/Userorder'



export default function App() {
  return (
    <>
    <Topheader/>
    <Midheader/>
    <Menu/>

    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/grocery" element={ <Grocery/>}/>
      <Route path="/dairy" element={<Dairy/>}/>
      <Route path="/handcraft" element={<Handcraft/>}/>
      <Route path="/herbal" element={ <Herbal/>}/>
      <Route path="/clothes" element={<Clothes/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/singlepage/:proid" element={<Singlepage/>}/>
       <Route path="/cart" element={ <Cart/>}/>
       <Route path="/login" element={ <Login/>}/>
       <Route path="/signin" element={ <Signin/>}/>
       <Route path="/useraccount" element={ <Userdaskboard/>}>
          <Route path="/useraccount/userinfo" element={ <Useraccountinfoc/> }/>
          <Route path="/useraccount/userorder" element={<Userorder/>}/>
       </Route>
       <Route path="/searchpage" element={ <Searchpage/>}/>
       <Route path="*" element={<Errorpage/>}/>
     
    </Routes>
    {/* <Single/> */}
    <Footer/>
 
  
   
    </>
  )
}

