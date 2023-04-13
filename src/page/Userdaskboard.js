import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Loginc from '../compnonet/Loginc'
import '../compnonet/comstyle/formstyle.css'
import Userdask from '../compnonet/Userdask';
import { useSelector } from 'react-redux';

export default function Userdaskboard() {
  let{status,loginuser}=useSelector((state)=>state.loginuserManager);
   
  return (
    <>
    {(loginuser.email==="")?(   <Container fluid className='loginpage_section'>
      <Container>
        <Row className='formouterrow py-3'>
          <h1 className='formheader'>CUSTOMER LOGIN</h1>
          <Loginc/>
        </Row>
      </Container>
    </Container>):(
        <Userdask/>
    )
}
 
    
    </>
  )
}
