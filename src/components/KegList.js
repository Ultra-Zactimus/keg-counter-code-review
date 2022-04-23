import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  const { onSoldPints} = props;
  return (
    <React.Fragment>
      <hr/>
      {props.kegList.map((keg, index) =>
      <React.Fragment>
        <Keg
          whenKegClicked={props.onKegSelection}
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          pints={keg.pints}
          id={keg.id}
          key={keg.id} 
        />
        <button onClick={()=> onSoldPints(keg.id)}>Buy a Pint</button>
        </React.Fragment> 
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  onSoldPints: PropTypes.func
};

export default KegList;