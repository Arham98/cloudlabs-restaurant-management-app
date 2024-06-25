import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import imgPlaceholder from '../images/imgPlaceholder.png';

export default function ItemCardPreview({
  jsonData,
}) {
  const categoryMenuData = JSON.parse(jsonData);
  const [imgLink, setImgLink] = useState(categoryMenuData.imageLink);

  const handleImgError = () => {
    setImgLink(imgPlaceholder);
  };

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
            src={imgLink}
            alt="Image Not Found"
            onError={handleImgError}
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
