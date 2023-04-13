import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Outlet } from 'react-router-dom';
import './comstyle/userdaskstyle.css';
import Useraccountinfoc from './Useraccountinfoc';
import Userdaskmenu from './Userdaskmenu';
import Userorder from './Userorder';

export default function Userdask() {
  return (
    <>
   <div className="daskboardSection">
    <Container className='py-2 h-100 userdaskcontainer'>
      <Row className='usertoprow py-1'><h3><span className='toprowspan'>User Information</span></h3></Row>
      <Row className=' userdaskrow '>
        
        <Userdaskmenu/>
       
        <Outlet/>
        {/* <Useraccountinfoc/>
        <Userorder/> */}
      </Row>
    </Container>
   </div>
    </>
  )
}
