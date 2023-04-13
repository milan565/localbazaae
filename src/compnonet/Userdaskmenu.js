import React from 'react'
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Userdaskmenu() {
  return (
    <>
      <Col xl={2} md={3} xs={3} className=' userdaskmenu py-lg-3 py-2'>
        <h3 className='userdaskheader'>Account Dashboard</h3>
        <ListGroup className='listgroup'>
        <ListGroup.Item className='listitem'>
         <Link to='userinfo' className='userdasklink'><span >Account Information</span></Link>
            </ListGroup.Item>
            <ListGroup.Item className='listitem'>
                <Link to='userorder'  className='userdasklink'><span >My Order</span></Link>
            </ListGroup.Item>
            <ListGroup.Item className='listitem'>
                <Link to='' className='userdasklink'><span >My wish List</span></Link>
            </ListGroup.Item>
            <ListGroup.Item className='listitem'>
                <Link to='' className='userdasklink'><span >Address Book</span></Link>
            </ListGroup.Item>
           
            <ListGroup.Item className='listitem'>
                <Link to='' className='userdasklink'><span >My Product Reviews</span></Link>
            </ListGroup.Item>
            <ListGroup.Item className='listitem'>
                <Link to='' className='userdasklink'><span >Newsletter Subscription</span></Link>
            </ListGroup.Item>
           
        </ListGroup>
      </Col>
    </>
  )
}
