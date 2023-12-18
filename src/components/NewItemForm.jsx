import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function NewItemForm({
  setAction,
  setName,
  setImageLink,
  setCategory,
  setInfo,
  setPrice,
  setId,
}) {
  // Function to update GraphQL query parameters to trigger API call to add course
  const addItem = (event) => {
    event.preventDefault();
    if (event.target[0].value
      && event.target[1].value
      && event.target[2].value
      && event.target[3].value
      && event.target[4].value
    ) {
      const id = Math.floor(Math.random() * (999999 - 100 + 1) + 100);
      setId(id);
      setAction('addItem');
      setName(event.target[0].value);
      setInfo(event.target[1].value);
      setCategory(event.target[2].value);
      setPrice(event.target[3].value);
      setImageLink(event.target[4].value);
    }
  };

  return (
    <Col style={{ paddingBottom: '24px' }}>
      <Form onSubmit={addItem}>
        <Container className="flex">
          <h3 style={{ color: '#E84545' }}>Menu Item Name</h3>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Menu Item Name"
              aria-label="Menu Item Name"
            />
          </InputGroup>
          <h3 style={{ color: '#E84545' }}>Menu Item Details</h3>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Menu Item Details"
              aria-label="Menu Item Details"
            />
          </InputGroup>
          <h3 style={{ color: '#E84545' }}>Menu Item Category</h3>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Menu Item Category"
              aria-label="Menu Item Category"
            />
          </InputGroup>
          <h3 style={{ color: '#E84545' }}>Menu Item Price</h3>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Menu Item Price"
              aria-label="Menu Item Price"
            />
          </InputGroup>
          <h3 style={{ color: '#E84545' }}>Menu Item Image URL</h3>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Menu Item Image URL"
              aria-label="Menu Item Image URL"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Button className="button" type="submit">Add Menu Item</Button>
          </InputGroup>
        </Container>
      </Form>
    </Col>
  );
}

NewItemForm.propTypes = {
  setAction: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  setImageLink: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
  setInfo: PropTypes.func.isRequired,
  setPrice: PropTypes.func.isRequired,
  setId: PropTypes.func.isRequired,
};
