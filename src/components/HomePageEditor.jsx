import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import PageError from './errorPages/PageError';
import Loading from './loading/Loading';
import useFetch from '../hooks/useFetch';
import Categorizer from './Categorizer';
import NewItemForm from './NewItemForm';

export default function HomePageEditor() {
  const [action, setAction] = useState('getAllItems');
  const [name, setName] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [category, setCategory] = useState('');
  const [info, setInfo] = useState('');
  const [price, setPrice] = useState(0);
  const [id, setId] = useState('');

  const queryParams = {
    name: `${name}`,
    imageLink: `${imageLink}`,
    category: `${category}`,
    info: `${info}`,
    id: `${id}`,
    price,
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

  // Function to re-update GraphQL query parameters fetch list of items
  // when either a course had been added, edited, or deleted
  useEffect(() => {
    if (!callLoading && action !== 'getAllItems') {
      setAction('getAllItems');
    }
  }, [callLoading]);

  if (callLoading) {
    return (
      <Loading />
    );
  } if (!(callSuccess)) {
    if (!itemData.success) {
      console.error(`The following errors were encountered:\nError -> ${itemData.error}\n`);
      return (
        <PageError errorMessage={`The following errors were encountered:\nError -> ${itemData.error}\n`} />
      );
    }
    return (
      <PageError errorMessage="Oops! Something went wrong" />
    );
  } if (!itemData.length) {
    return (
      <Container className="center-container">
        <pre>
          <h1 className="text-title-color">Action Successful</h1>
        </pre>
      </Container>
    );
  }
  return (
    <Container>
      <Col className="align-items-center">
        <Row style={{ paddingTop: '10px' }}>
          <h1 className="header1-design">Menu</h1>
        </Row>
        <Row style={{ paddingTop: '20px', paddingBottom: '20px' }}>
          <Categorizer
            data={itemData}
            type="menuItem"
            setAction={setAction}
            setName={setName}
            setImageLink={setImageLink}
            setCategory={setCategory}
            setInfo={setInfo}
            setPrice={setPrice}
            setId={setId}
          />
        </Row>
        <Row style={{ paddingTop: '20px' }}>
          <hr style={{ color: '#000000' }} />
        </Row>
        <Row style={{ paddingTop: '30px' }}>
          <h1 className="header1-design">Add New Menu Item</h1>
        </Row>
        <Row style={{ paddingTop: '20px' }}>
          <NewItemForm
            setAction={setAction}
            setName={setName}
            setImageLink={setImageLink}
            setCategory={setCategory}
            setInfo={setInfo}
            setPrice={setPrice}
            setId={setId}
          />
        </Row>
        <Row style={{ paddingTop: '20px' }}>
          <hr style={{ color: '#000000' }} />
        </Row>
        <Row style={{ paddingTop: '20px' }}>
          <Button className="button" href="/menu">Preview menu</Button>
        </Row>
        <Container style={{ paddingTop: '60px' }} />
      </Col>
    </Container>
  );
}
