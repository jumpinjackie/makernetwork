import * as React from 'react';
const LogoImage = require('file!../assets/logo.png');

interface ILogoProps {
  style?: Object;
};

const Logo = () => (
  <div className="flex items-center">
    <img style={ styles }
      src={ LogoImage }
      alt="Maker Network" />
  </div>
);

const styles = { width: 40, height: 40 };

export default Logo;
