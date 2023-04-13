import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginValidation } from '../validation/Loginvalidation';
import { useSelector,useDispatch } from 'react-redux';
import {addLogInUser,updateStatus} from '../reduxFeature/userLogInSlice';
import { LOGINSTATUS } from '../reduxFeature/userLogInSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Loginc() {
  let dispatch=useDispatch();
  let {userData}=useSelector((state)=>state.userManager);
  let{status,loginuser}=useSelector((state)=>state.loginuserManager);
  let {values,handleSubmit,handleChange,handleBlur,touched,errors}=useFormik({
    initialValues:{
      email:'',
      password:''
    },
    validationSchema:loginValidation,
    onSubmit:(values,action)=>{
    let {email,password}=values;
    if(loginuser.email===''){
      if(userData.find(item=>item.email===email)){
        if(userData.find(item=>item.password===password)){
          dispatch(addLogInUser(email));
          dispatch(updateStatus(LOGINSTATUS.IDEL));
          action.resetForm();
        }
        else{
          dispatch(updateStatus(LOGINSTATUS.PASSWORD));
          setTimeout(()=>{
           dispatch(updateStatus(LOGINSTATUS.IDEL))
          },1000)
        }
      }
      else{
       dispatch(updateStatus(LOGINSTATUS.EMAIL));
       setTimeout(()=>{
        dispatch(updateStatus(LOGINSTATUS.IDEL))
       },1000)
      }
    }
    else{
      dispatch(updateStatus(LOGINSTATUS.LOGUSER))
    }
    
 
    }
  })
  if(status===LOGINSTATUS.SUCESSFULL){
    toast('you successfully logIn', {
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
  if(status===LOGINSTATUS.EMAIL){
    toast.error('your email id does not match ', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }  if(status===LOGINSTATUS.PASSWORD){
    toast.error('your Password does not match', {
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
  if(status===LOGINSTATUS.LOGUSER){
    toast.error('sorry your are already log in ', {
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
      <Row className='forminnerrow'>
       <Col md={6} className='formcol px-2 sm-my-0 my-1'>
        <div className="formbox">
         <div className="formboxheader">
         <h1 className='formtitle'><span>REGISTERED</span>  CUSTOMERS</h1>
        <p className='formtitleparag'>If you have an account, sign in with your email address.</p>
         </div>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="sm-my-3 my-2" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" 
                name='email' 
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}/>
                {
                  errors.email && touched.email?( <Form.Text className="text-muted inputmess"> {errors.email} </Form.Text>):null
                }
               
            </Form.Group>

            <Form.Group className="sm-my-3 my-2" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" 
                name='password' 
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}/>
                   {
                  errors.password && touched.password?( <Form.Text className="text-muted inputmess"> {errors.password} </Form.Text>):null
                }
            </Form.Group>
           <div className="formbutton sm-my-5 my-3 d-flex justify-content-between">
           <Button variant="primary" type="submit"> LogIn</Button>
           <Link to='' className='forgetpassword'><span>forgot your password</span></Link>
           </div>
            
         </Form>
        </div>
       </Col>
       <Col md={6} className='formcol px-2 sm-my-0 my-2'>
       <div className="formbox">
           <div className="formboxheader">
              <h1 className='formtitle'><span>NEW</span>  CUSTOMERS</h1>
              <p className='formtitleparag'>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>
            </div>
            <div className="newaccount_section">
              <Link to='/signin'><Button variant="primary"> CREATE AN ACCOUNT</Button></Link>
             </div>
       </div>
       </Col>
     </Row>
     <ToastContainer />
    </>
  )
}
