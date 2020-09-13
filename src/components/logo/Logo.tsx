import React from 'react';

import { faShoePrints } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Logo = ({ style }: any) => {
  return (
    <div>
      <img src="shoes.png" alt="logo" className="logo" style={style} />
    </div>
  );
};

export default Logo;
