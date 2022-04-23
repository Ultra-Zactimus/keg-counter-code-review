import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h4><strong>Name:</strong> <em>{keg.name}</em></h4>
      <h4><strong>Brand:</strong> <em>{keg.brand}</em></h4>
      <h4><strong>Price:</strong> <em>{keg.price}</em></h4>
      <h4><strong>Alcohol Content:</strong> <em>{keg.alcoholContent}</em></h4>
      <h4><strong>Pints Left:</strong> <em>{keg.pints}</em></h4>
      <button onClick={() => onClickingDelete(keg.id)}>Remove Keg</button>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingRemove: PropTypes.func
};

export default KegDetail;