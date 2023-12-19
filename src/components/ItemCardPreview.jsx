import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function ItemCardPreview({
  jsonData,
}) {
  const categoryMenuData = JSON.parse(jsonData);
  return (
    <Col className="col-6" style={{ paddingBottom: '24px' }}>
      <Card>
        <a
          href={`/menu/${categoryMenuData.id}`}
          className="stretched-link"
          style={{
            color: 'black', textDecoration: 'none',
          }}
        >
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
          </Card.Body>
        </a>
      </Card>
    </Col>
  );
}

ItemCardPreview.propTypes = {
  jsonData: PropTypes.string.isRequired,
};
