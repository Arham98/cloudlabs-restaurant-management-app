import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import CardList from './CardList';
// import ItemCard from './ItemCard';
// import LoaderCard from './loading/LoaderCard';

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
    const groupedMenuData = Object.groupBy(data, (item) => item.category);
    listSections = Object.keys(groupedMenuData).map((groupName) => (
      <React.Fragment key={groupName}>
        <h3 className="header3-design">{groupName}</h3>
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
      </React.Fragment>
    ));
    // <ItemCard
    //   jsonData={dataObjStr}
    //   setAction={setAction}
    //   setName={setName}
    //   setImageLink={setImageLink}
    //   setCategory={setCategory}
    //   setInfo={setInfo}
    //   setPrice={setPrice}
    //   setId={setId}
    // />
    // let listCards = <div />;
    // listCards = data.menuList.map((item) => {
    //   const dataObjStr = JSON.stringify(item);
    //   if (type === 'menuItem') {
    //     return (
    //       <React.Fragment key={item.id}>
    //         <ItemCard
    //           jsonData={dataObjStr}
    //           setAction={setAction}
    //           setName={setName}
    //           setImageLink={setImageLink}
    //           setCategory={setCategory}
    //           setInfo={setInfo}
    //           setPrice={setPrice}
    //           setId={setId}
    //         />
    //       </React.Fragment>
    //     );
    //   }
    //   return (<div />);
    // });
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
    <Col className="flex-col">
      { listSections }
    </Col>
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
