import React from "react";
import PropTypes from "prop-type";

function KegDetail(props) {
  const { keg, onClickingRemove } = props;
  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>{ keg.name }</h3>
      <h3>{ keg.brand }</h3>
      <h3>{ keg.price }</h3>
      <h3>{ keg.alcoholContent }</h3>
      <button onClick={ () => onClickingRemove(keg.id) }>Remove Keg</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingRemove: PropTypes.func
};

export default KegDetail;