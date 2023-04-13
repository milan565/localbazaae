import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Useraccountinfoc() {
  let{status,loginuser}=useSelector((state)=>state.loginuserManager);
  let{userData}=useSelector((state)=>state.userManager);
  let [userPersonalInfo]=userData.filter((item)=>item.email===loginuser.email);
  
  return (
    <>
    <Col xl={10} md={9} xs={9} className='py-md-3 py-2  px-4' >
        <h3 className='accountheader'>User Dashboard</h3>
         <Row className='py-3 px-0 account-inner-row'>
            <h4 className='accounttitle'>User INFORMATION</h4>
            <Col className='py-2' >
            <h5 className='user-contact-info'>Contact Information</h5>
            <p className='user-detail-p'>User Name: <span className='px-2'>{`${userPersonalInfo.fname} ${userPersonalInfo.lname}`}</span></p>
            <p className='user-detail-p'>User Contact : <span className='px-2'>{userPersonalInfo.contactNumber}</span></p>
            <p className='user-detail-p'>User Email Id: <span className='px-2'>{userPersonalInfo.email}</span></p>
             <Link to='' className='user-account-link'><span>Change Password</span></Link>
            </Col>
         </Row>
    </Col>
      
    </>
  )
}
