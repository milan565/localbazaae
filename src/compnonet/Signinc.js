import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { singinValidation } from '../validation/Signinvalidation';
import { useDispatch ,useSelector} from 'react-redux';
import { addUser,updateUserStatus } from '../reduxFeature/userRegistrationSlice';
import { USERSTATUS } from '../reduxFeature/userRegistrationSlice';
import { BsArrowLeft } from "react-icons/bs";



export default function Signinc() {
  let dispatch=useDispatch();
  let {userData}=useSelector((state)=>state.userManager);
  let {values,handleBlur,handleSubmit,handleChange,errors,touched}=useFormik({
    initialValues:{
      fname:'',
      lname:'',
      contactNumber:'',
      email:'',
      password:'',
      conformPassword:''
    },
    validationSchema:singinValidation,
    onSubmit:(values,action)=>{
      let data=values;
       try{
         dispatch(updateUserStatus(USERSTATUS.PROCESSING));
         if(userData.find((user)=>user.email===values.email)){
            dispatch(updateUserStatus(USERSTATUS.REGISTER));
            setTimeout(()=>{
              dispatch(updateUserStatus(USERSTATUS.IDEL))
            },1000)
         }
         else{
          dispatch(addUser(data));
          dispatch(updateUserStatus(USERSTATUS.SUCCESFULL));
          setTimeout(()=>{
           dispatch(updateUserStatus(USERSTATUS.IDEL));
          },1000)
          action.resetForm()
         }
       
       }
       catch(err){
        console.log(err);
        dispatch(updateUserStatus(USERSTATUS.ERROR));
       }
      
      // await new Promise((resolve)=>setTimeout(resolve,1000));
   
    }
  })
 
  return (
    <>

    <Form onSubmit={handleSubmit}>
      <Row className='forminnerrow '>
      
       <Col md={6} className='formcol px-2 sm-my-0 my-1'>
        <div className="formbox">
         <div className="formboxheader">
         <h1 className='formtitle'><span>PERSONAL INFORMATION</span>  </h1>
       
         </div>
        {/* <Form> */}
            <Form.Group className="sm-my-3 my-1 sm-py-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" 
                
                name='fname'
                value={values.fname}
                onChange={handleChange} 
                onBlur={handleBlur}
                />
                {
                  errors.fname && touched.fname?(<Form.Text className="text-muted inputmess">{errors.fname} </Form.Text>):null
                }
                
            </Form.Group>

            <Form.Group className="sm-my-3 my-1 sm-py-2" controlId="formBasicPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text"
                 
                 name='lname'
                 value={values.lname}
                 onChange={handleChange} 
                 onBlur={handleBlur}
                  />
                 {
                  errors.lname && touched.lname?(<Form.Text className="text-muted inputmess">{errors.lname} </Form.Text>):null
                }
            </Form.Group>
            <Form.Group className="sm-my-3 my-1 sm-py-2" controlId="formBasicPassword">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control type="tel" 
               
                name='contactNumber'
                value={values.contactNumber}
                onChange={handleChange} 
                onBlur={handleBlur}
                 />
                 {
                  errors.contactNumber && touched.contactNumber?(<Form.Text className="text-muted inputmess">{errors.contactNumber} </Form.Text>):null
                }
            </Form.Group>
          
            
         {/* </Form> */}
        </div>
       </Col>
       <Col md={6} className='formcol px-2 sm-my-0 my-2'>
       <div className="formbox">
           <div className="formboxheader">
              <h1 className='formtitle'><span>SIGN-IN INFORMATION</span>  </h1>
             
            </div>
            {/* <Form> */}
            <Form.Group className="sm-my-3 my-1" controlId="formBasicEmail">
                <Form.Label>Email Id</Form.Label>
                <Form.Control type="email" 
                
                name='email'
                value={values.email}
                onChange={handleChange} 
                onBlur={handleBlur}
                />
                 {
                  errors.email && touched.email?(<Form.Text className="text-muted inputmess">{errors.email} </Form.Text>):null
                }
            </Form.Group>

            <Form.Group className="sm-my-3 my-1 " controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" 
                
                name='password'
                value={values.password}
                onChange={handleChange} 
                onBlur={handleBlur}
                />
               {
                  errors.password && touched.password?(<Form.Text className="text-muted inputmess">{errors.password} </Form.Text>):null
                }
            </Form.Group>
            <Form.Group className="sm-my-3 my-1" controlId="formBasicPassword">
                <Form.Label>Conform Password</Form.Label> 
                <Form.Control type="password" 
                
                name='conformPassword' 
                value={values.conformPassword}
                onChange={handleChange} 
                onBlur={handleBlur}
                />
                {
                  errors.conformPassword && touched.conformPassword?(<Form.Text className="text-muted inputmess">{errors.conformPassword} </Form.Text>):null
                }
            </Form.Group>
            <div className="signinbtn d-flex justify-content-between">
            <Button variant="primary" type="submit" className='mt-2'>Create Account</Button>
            <Link to='/login'><Button className='mt-2'>Back <span><BsArrowLeft/></span></Button></Link>
            </div>
           
            {/* </Form> */}
       </div>
       </Col>
     
     </Row> 
     </Form>
    </>
  )
}
