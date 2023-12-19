import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ItemCard from './ItemCard';
import ItemCardPreview from './ItemCardPreview';

function CardList({
  data,
  type,
  setAction,
  setName,
  setImageLink,
  setCategory,
  setInfo,
  setPrice,
  setId,
}) {
  let listCards = <div />;
  if (data || false) {
    listCards = data.map((item) => {
      const dataObjStr = JSON.stringify(item);
      if (type === 'menuEditItem') {
        return (
          <React.Fragment key={item.id}>
            <ItemCard
              jsonData={dataObjStr}
              setAction={setAction}
              setName={setName}
              setImageLink={setImageLink}
              setCategory={setCategory}
              setInfo={setInfo}
              setPrice={setPrice}
              setId={setId}
            />
          </React.Fragment>
        );
      }
      if (type === 'menuItem') {
        return (
          <React.Fragment key={item.id}>
            <ItemCardPreview
              jsonData={dataObjStr}
              setAction={setAction}
              setName={setName}
              setImageLink={setImageLink}
              setCategory={setCategory}
              setInfo={setInfo}
              setPrice={setPrice}
              setId={setId}
            />
          </React.Fragment>
        );
      }
      return (<div />);
    });
  } else {
    return (
      <Container fluid>
        <h3 className="header5-design">Oops! There are no menu items in the list.</h3>
      </Container>
    );
  }
  if (data.length === 0) {
    return (
      <Container fluid>
        <h3 className="header5-design">Oops! There are no menu items in the list.</h3>
      </Container>
    );
  }
  return (
    <Row className="flex-row">
      { listCards }
    </Row>
  );
}

CardList.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  type: PropTypes.string.isRequired,
  setAction: PropTypes.func,
  setName: PropTypes.func,
  setImageLink: PropTypes.func,
  setCategory: PropTypes.func,
  setInfo: PropTypes.func,
  setPrice: PropTypes.func,
  setId: PropTypes.func,
};

CardList.defaultProps = {
  setAction: null,
  setName: null,
  setImageLink: null,
  setCategory: null,
  setInfo: null,
  setPrice: null,
  setId: null,
};

export default CardList;
