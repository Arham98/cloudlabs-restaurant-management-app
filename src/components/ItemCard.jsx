import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function ItemCard({
  jsonData,
  setAction,
  setName,
  setImageLink,
  setCategory,
  setInfo,
  setPrice,
  setId,
}) {
  const [deleteShow, setDeleteShow] = useState(false);
  const handleDeleteClose = () => setDeleteShow(false);
  const handleDeleteShow = () => setDeleteShow(true);
  const [editShow, setEditShow] = useState(false);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  const categoryMenuData = JSON.parse(jsonData);

  // Function to call the deleteItem action
  const deleteMenuItemMethod = () => {
    setId(categoryMenuData.id);
    setAction('deleteItem');
  };

  // Function to call the editItem action
  const editMenuItemMethod = (event) => {
    event.preventDefault();
    if (event.target[0].value
      && event.target[1].value
      && event.target[2].value
      && event.target[3].value
      && event.target[3].value
    ) {
      setId(categoryMenuData.id);
      setAction('editItem');
      setName(event.target[0].value);
      setInfo(event.target[1].value);
      setCategory(event.target[2].value);
      setPrice(event.target[3].value);
      setImageLink(event.target[4].value);
    }
  };

  return (
    <Col className="col-6" style={{ paddingBottom: '24px' }}>
      <Card>
        <Card.Img
          variant="top"
          src={categoryMenuData.imageLink}
          alt="Image Not Found"
        />
        <Card.Header>{categoryMenuData.name}</Card.Header>
        <Card.Body>
          <Card.Text>
            <b>Price:</b>
            {` $${categoryMenuData.price}`}
          </Card.Text>
          <Container style={{ padding: '5px' }} />
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={<Tooltip className="custom-tooltip" id="edit-tooltip" style={{ fontSize: '12px' }}>{`Edit ${categoryMenuData.name}`}</Tooltip>}
          >
            <Button variant="link" onClick={handleEditShow} style={{ color: 'black', outline: null }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
              </svg>
            </Button>
          </OverlayTrigger>
          <Modal
            show={editShow}
            onHide={handleEditClose}
            keyboard={false}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>
                {`Edit ${categoryMenuData.name}`}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={editMenuItemMethod}>
                <img src={categoryMenuData.imageLink} className="img-fluid" alt={categoryMenuData.name} />
                <h3 style={{ color: '#E84545', paddingTop: '10px' }}>Edit Name</h3>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Edit Menu Item Name"
                    aria-label="Edit Menu Item Name"
                    defaultValue={categoryMenuData.name}
                  />
                </InputGroup>
                <h3 style={{ color: '#E84545' }}>Edit Details</h3>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Edit Menu Item Details"
                    aria-label="Edit Menu Item Details"
                    defaultValue={categoryMenuData.info}
                  />
                </InputGroup>
                <h3 style={{ color: '#E84545' }}>Edit Category</h3>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Edit Menu Item Category"
                    aria-label="Edit Menu Item Category"
                    defaultValue={categoryMenuData.category}
                  />
                </InputGroup>
                <h3 style={{ color: '#E84545' }}>Edit Price</h3>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Edit Menu Item Price"
                    aria-label="Edit Menu Item Price"
                    defaultValue={categoryMenuData.price}
                  />
                </InputGroup>
                <h3 style={{ color: '#E84545' }}>Edit Image URL</h3>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Edit Menu Item Image URL"
                    aria-label="Edit Menu Item Image URL"
                    defaultValue={categoryMenuData.imageLink}
                  />
                </InputGroup>
                <hr style={{ color: '#000000' }} />
                <Row style={{ paddingTop: '5px' }} className="flex-row">
                  <Col>
                    <InputGroup className="mb-3">
                      <Button variant="secondary" onClick={handleEditClose}>Discard Changes</Button>
                    </InputGroup>
                  </Col>
                  <Col>
                    <InputGroup className="mb-3">
                      <Button className="button" type="submit">Save Changes</Button>
                    </InputGroup>
                  </Col>
                </Row>
              </Form>
            </Modal.Body>
          </Modal>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={<Tooltip className="custom-tooltip" id="edit-tooltip" style={{ fontSize: '12px' }}>{`Delete ${categoryMenuData.name}`}</Tooltip>}
          >
            <Button variant="link" onClick={handleDeleteShow} style={{ color: 'black', outline: null }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
              </svg>
            </Button>
          </OverlayTrigger>
          <Modal
            show={deleteShow}
            onHide={handleDeleteClose}
            keyboard={false}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>
                {`Delete ${categoryMenuData.name}`}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {`Are you sure want to delete "${categoryMenuData.name}"?`}
            </Modal.Body>
            <Modal.Footer>
              <Button className="button" variant="secondary" onClick={handleDeleteClose}>No</Button>
              <Button className="button" onClick={deleteMenuItemMethod}>Yes</Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </Col>
  );
}

ItemCard.propTypes = {
  jsonData: PropTypes.string.isRequired,
  setAction: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  setImageLink: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
  setInfo: PropTypes.func.isRequired,
  setPrice: PropTypes.func.isRequired,
  setId: PropTypes.func.isRequired,
};
