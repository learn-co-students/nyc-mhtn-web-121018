import React, { Fragment } from "react";

const Sushi = props => {
  // console.log(props.name);
  return (
    <div className="sushi">
      <div
        className="plate"
        onClick={
          props.wallet - props.price > -1
            ? () => props.eatSushi(props.id, props.price)
            : null
        }
      >
        {props.eaten === true ? null : <img src={props.image} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  );
};

export default Sushi;
