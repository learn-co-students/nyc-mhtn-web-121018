import React from 'react';

const SwipeButton = (props) => {
  const { onClick, children } = props;

  return <button className="swipe-button" onClick={onClick}>{children}</button>
}

export default SwipeButton;
