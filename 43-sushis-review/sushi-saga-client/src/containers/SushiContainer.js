import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = props => {
  console.log(props);

  const renderSushis = () => {
    console.log("hello");
    return props.sushis.map(sushi => {
      return (
        <Sushi
          image={sushi.img_url}
          name={sushi.name}
          price={sushi.price}
          id={sushi.id}
          eaten={sushi.eaten}
          eatSushi={props.eatSushi}
          wallet={props.wallet}
        />
      );
    });
  };

  return (
    <Fragment>
      <div className="belt">
        {renderSushis()}
        <MoreButton getSushis={props.getSushis} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
