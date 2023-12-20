// import React, { useState } from 'react';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useParams } from 'react-router-dom';
import PageError from './errorPages/PageError';
import Loading from './loading/Loading';
import useFetch from '../hooks/useFetch';

export default function HomePage() {
  const params = useParams();
  const action = 'getItem';

  const queryParams = {
    id: params.id,
  };

  // Initializing API Call with a useFetch function
  const {
    data: itemData,
    success: callSuccess,
    loading: callLoading,
  } = useFetch(
    action,
    JSON.stringify(queryParams),
  );

  if (callLoading) {
    return (
      <Loading />
    );
  } if (!(callSuccess)) {
    if (!itemData.success) {
      // eslint-disable-next-line no-console
      console.error(`The following errors were encountered:\nError -> ${itemData.error}\n`);
      return (
        <PageError errorMessage={`The following errors were encountered:\nError -> ${itemData.error}\n`} />
      );
    }
    return (
      <PageError errorMessage="Oops! Something went wrong" />
    );
  } if (itemData.message) {
    return (
      <Container className="center-container">
        <pre>
          <h1 className="text-title-color">Oops! Item not found</h1>
        </pre>
      </Container>
    );
  }

  return (
    <Container fluid style={{ paddingLeft: '5vh', paddingRight: '5vh' }}>
      <Row style={{ paddingTop: '7vh' }} />
      <Row className="flex-row">
        <Col className="col-auto d-flex justify-content-start">
          <Image
            className="img-fluid"
            src={itemData.imageLink}
            alt={itemData.name}
            style={{
              width: '25%',
              height: 'auto',
              borderRadius: '50%',
              overflow: 'hidden',
            }}
          />
          <Col className="d-flex align-items-center" style={{ paddingLeft: '1%' }}>
            <Row>
              <h1 className="header1-design">{itemData.name}</h1>
              <h3 className="header3-design">
                {'Price: '}
                <span style={{ color: 'black', fontWeight: 'normal' }}>
                  {' '}
                  { `$${itemData.price}`}
                </span>
              </h3>
              <h3 className="header3-design">
                {'Category: '}
                <span style={{ color: 'black', fontWeight: 'normal' }}>
                  {' '}
                  { `$${itemData.category}`}
                </span>
              </h3>
              <h5 className="header5-design">
                Details:
                <br />
                <span style={{ color: 'black', fontWeight: 'normal' }}>
                  {' '}
                  {itemData.info}
                </span>
              </h5>
            </Row>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
