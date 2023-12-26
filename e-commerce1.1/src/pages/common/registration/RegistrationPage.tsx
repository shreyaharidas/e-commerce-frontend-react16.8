import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaLock, FaAnchor } from 'react-icons/fa';
import { RegistrationPageProps } from './types';

const RegistrationPage = ({ register }:RegistrationPageProps) => {
  return (
    <Container fluid className="bg-gradient">
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="bg-light p-4 rounded">
          <h2 className="mt-3 mb-4 text-center">Register for E-Commerce</h2>
          <Form onSubmit={register}>
            <Form.Group controlId="formFirstName">
              <Form.Label>
                <FaUser className="mr-2" />
                Full Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                name="full_name"
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>
                <FaEnvelope className="mr-2" />
                Email address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your e-mail"
                name="e_mail"
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
                autoComplete='current-password'
                required
              />
            </Form.Group>

            <Form.Group controlId="profilePicture">
  <Form.Label>Profile Picture</Form.Label>
  <Form.Control
    type="file"
    accept=".jpg, .jpeg, .png"
    name="profile_pic"
    required
  />
  <Form.Text muted>
    Please upload a JPG or PNG file.
  </Form.Text>
</Form.Group>


            <Form.Group controlId="formClientType">
              <Form.Label>
                <FaAnchor className="mr-2" />
                Client Type
              </Form.Label>
              <Form.Control
                as="select"
                name="client_type"
                required
              >
                <option value="">Select your type</option>
                <option value="supplier">Supplier</option>
                <option value="customer">Customer</option>
              </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3" >
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationPage;
