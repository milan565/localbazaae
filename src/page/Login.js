import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../compnonet/comstyle/formstyle.css'
import Loginc from '../compnonet/Loginc';

export default function Login() {
  return (
    <>
    <Container fluid className='loginpage_section'>
      <Container>
        <Row className='formouterrow py-3'>
          <h1 className='formheader'>CUSTOMER LOGIN</h1>
          <Loginc/>
        </Row>
      </Container>
    </Container>
     
    </>
  )
}
