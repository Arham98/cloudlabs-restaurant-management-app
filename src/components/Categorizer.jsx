import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardList from './CardList';

function Categorizer({
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
  let listSections = <div />;
  if (data) {
    // Custom GroupBy using reduce
    const groupedMenuData = data.reduce((group, item) => {
      if (!group[item.category]) {
        // eslint-disable-next-line no-param-reassign
        group[item.category] = [];
        group[item.category].push(item);
      } else {
        group[item.category].push(item);
      }
      return group;
    }, {});
    // Alternative new way for groupby (not supported on all browsers including Safari)
    // const groupedMenuData = Object.groupBy(data, (item) => item.category);

    listSections = Object.keys(groupedMenuData).map((groupName) => (
      <React.Fragment key={groupName}>
        <Row style={{ paddingTop: '10px' }}>
          <h3 className="header3-design">{groupName}</h3>
          <Container>
            <hr style={{ color: '#000011' }} />
          </Container>
        </Row>
        <Row style={{ paddingTop: '10px' }}>
          <CardList
            data={groupedMenuData[`${groupName}`]}
            type={type}
            setAction={setAction}
            setName={setName}
            setImageLink={setImageLink}
            setCategory={setCategory}
            setInfo={setInfo}
            setPrice={setPrice}
            setId={setId}
          />
        </Row>
      </React.Fragment>
    ));
  } else {
    return (
      <Row style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <Container fluid>
          <h3 className="header5-design">Oops! There are no menu items in the list.</h3>
        </Container>
      </Row>
    );
  }
  if (data.length === 0) {
    return (
      <Row style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <Container fluid>
          <h3 className="header5-design">Oops! There are no menu items in the list.</h3>
        </Container>
      </Row>
    );
  }
  return (
    <Row className="flex-row">
      <Col className="flex-col">
        { listSections }
      </Col>
    </Row>
  );
}

Categorizer.propTypes = {
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

Categorizer.defaultProps = {
  setAction: null,
  setName: null,
  setImageLink: null,
  setCategory: null,
  setInfo: null,
  setPrice: null,
  setId: null,
};

export default Categorizer;
