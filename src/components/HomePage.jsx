import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import PageError from './errorPages/PageError';
import Loading from './loading/Loading';
import useFetch from '../hooks/useFetch';
import Categorizer from './Categorizer';
import NavBar from './utils/NavBar';

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
    <Container fluid>
      <NavBar type="preview" />
      <div style={{ paddingBottom: '26vh' }} />
      <Container style={{ paddingTop: '5vh' }}>
        <Col className="align-items-center">
          <Categorizer
            data={itemData}
            type="menuItem"
            setAction={setAction}
          />
          <Container style={{ paddingTop: '60px' }} />
        </Col>
      </Container>
    </Container>
  );
}
