import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h3>Name of Beer: {props.name}</h3>
        <h3>Brand Name: {props.brand}</h3>
        <h3>Price of Pint: {props.price}</h3>
        <h3>Alcohol Content: {props.alcoholContent}</h3>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;