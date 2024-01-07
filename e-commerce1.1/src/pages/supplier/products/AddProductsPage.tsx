// AddProductsPage.tsx
import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { AddProductsProps, DynamicField } from './types';

const AddProductsPage  = ({ nameRef, categoryRef, priceRef, stockRef,onFileChange, onAddProduct,handleFieldChange,handleAddField,additionalFields, submit }:AddProductsProps) => {


  return (
    <Container className="mt-4">
      <h2>Add Products</h2>
      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              name="product_name"
              ref={nameRef}
              required
            />
          </Col>
          <Col>
            <Form.Label>Product Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product category"
              name="product_category"
              ref={categoryRef}
              required
            />
          </Col>
          <Col>
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product price"
              name="product_price"
              ref={priceRef}
              required
            />
          </Col>
          <Col>
            <Form.Label>Product Stock</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter product stock"
              name="product_category"
              ref={stockRef}
              required
            />
          </Col>
        </Row>

        {additionalFields.map((field, index) => (
          <Row className="mb-3" key={index}>
            <Col>
              <Form.Label>{`Field ${index + 1}`}</Form.Label>
              <Form.Control
                type="text"
                placeholder={`Enter field ${index + 1}`}
                onChange={(e) => handleFieldChange(index, 'name', e.target.value)}
              />
            </Col>
            <Col>
              <Form.Label>Field Value</Form.Label>
              <Form.Control
                type="text"
                placeholder={`Enter value for field ${index + 1}`}
                onChange={(e) => handleFieldChange(index, 'value', e.target.value)}
              />
            </Col>
          </Row>
        ))}

        <Row className="mb-3">
          <Col>
            <Button variant="secondary" type="button" onClick={handleAddField}>
              + Add Field
            </Button>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Label>Product Photo</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={onFileChange}
              required
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="primary" type="button" className="mx-1" onClick={() => onAddProduct( additionalFields )}>
              Add Product
            </Button>
            <Button variant='success' type='button' className="mx-1" onClick={submit}>Submit Product</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default AddProductsPage;
