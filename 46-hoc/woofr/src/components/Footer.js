import React from 'react';
import { withRouter} from 'react-router-dom';
import withAd from '../hocs/withAd';

// Logout Button
const Footer = (props) => {
  const { who, years } = props;

  console.log('Footer', props);

  return (
    <div className="footer">
      <p>Copyright © {years} <span className="italics">{who}</span></p>
    </div>
  );
}

export default withAd(withRouter(Footer));
