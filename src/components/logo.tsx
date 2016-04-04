import * as React from 'react';
const LogoImage = require('../assets/logo.png');

interface ILogoProps {
  style?: Object;
};

const Logo = () => <a href="#">Maker Network</a>;
/*
(<img style={ styles }
      src={ LogoImage }
      alt="Maker Network" />);
*/
const styles = { width: 40, height: 40 };

export default Logo;
