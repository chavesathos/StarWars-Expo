import React from 'react';
import { LogoImage } from './styles';
import logoImage from "../../../../assets/logo-StarWars.png"


export const Logo = () => {
  return (
      <LogoImage source={ logoImage } />
  );
}
