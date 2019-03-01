import React from 'react';

const Footer = (props) => {
  const { who, years } = props;

  return (
    <div className="footer">
      <p>Copyright © {years} <span className="italics">{who}</span></p>
    </div>
  );
}

export default Footer;
