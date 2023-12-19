import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import PageError from './errorPages/PageError';
import Loading from './loading/Loading';
import useFetch from '../hooks/useFetch';
import Categorizer from './Categorizer';

export default function HomePage() {
  const [action, setAction] = useState('getAllItems');

  const queryParams = {};

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
  }
  return (
    <Container style={{ paddingTop: '5vh' }}>
      <Col className="align-items-center">
        <Row style={{ paddingTop: '10px' }}>
          <Button className="button" href="/menueditor">
            <p style={{ color: 'white', fontSize: '30px' }}>
              Edit Menu
            </p>
          </Button>
        </Row>
        <Categorizer
          data={itemData}
          type="menuItem"
          setAction={setAction}
        />
        <Container style={{ paddingTop: '60px' }} />
      </Col>
    </Container>
  );
}
