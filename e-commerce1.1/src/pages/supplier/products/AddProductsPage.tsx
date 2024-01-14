// AddProductsPage.tsx
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { AddProductsProps} from './types';

const AddProductsPage  = ({ handleFieldChange,handleAddField,additionalFields, submit }:AddProductsProps) => {


  return (
    <Container className="mt-4">
      <h2>Add Products</h2>
      <Form onSubmit={(e)=>submit(e,additionalFields)}>
        <Row className="mb-3">
          <Col>
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              name="product_name"
              required
            />
          </Col>
          <Col>
            <Form.Label>Product Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product category"
              name="product_category"
              required
            />
          </Col>
          <Col>
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product price"
              name="product_price"
              required
            />
          </Col>
          <Col>
            <Form.Label>Product Stock</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter product stock"
              name="product_stock"
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
              name="product_photo"
              required
            />
          </Col>
        </Row>

        <Row>
          <Col> 
            <Button variant='success' type='submit' className="mx-1">Submit Product</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default AddProductsPage;
