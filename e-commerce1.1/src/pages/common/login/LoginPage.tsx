import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LoginPage = () => {


  return (
    <Container fluid className="bg-gradient">
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="bg-light p-4 rounded">
          <h2 className="mt-3 mb-4 text-center">Login for E-Commerce</h2>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>
                <FaEnvelope className="mr-2" />
                Email address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"

                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>
                <FaLock className="mr-2" />
                Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="password"

                required
              />
            </Form.Group>
            
            <Button variant="primary" type="submit" className="w-100 mt-3">
              Login
            </Button>
            
            <Row className='mt-3 ms-3 align-items-center'>
 
    <Col className='me-3'>If you don't have an account yet, please 
    <Link to="/registration">
    <Button variant="success" type="button" className="w-25 mt-3 ms-1 mb-3">Register</Button>
    </Link>
    </Col>


    

</Row>



          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
