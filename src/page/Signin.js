import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../compnonet/comstyle/formstyle.css'
import Signinc from '../compnonet/Signinc'
import { useSelector } from 'react-redux';
import {USERSTATUS} from '../reduxFeature/userRegistrationSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Signin() {
  let {userStatus}=useSelector((state)=>state.userManager);
   if(userStatus===USERSTATUS.PROCESSING){
    toast.info('Registration is processing', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
   }
   if(userStatus===USERSTATUS.SUCCESFULL){
    toast.info('you are succesfullly Registered', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
   }
   if(userStatus===USERSTATUS.REGISTER){
    toast.info('The email id already Registration !please used other emai id', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
   }
  return (
    <>
      <Container fluid className='loginpage_section '>
      <Container>
        <Row className='formouterrow py-3 '>
          <h3 className='formheader'>CREATE NEW CUSTOMER ACCOUNT</h3>
          <Signinc/>
        </Row>
      </Container>
    </Container>
    <ToastContainer />
    </>
  )
}
