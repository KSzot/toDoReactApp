import React, { FunctionComponent } from 'react';
import img from '../../img/Logoicon.svg';
import { Wrapper, LogoImg, LogoText } from './Logo.css';

interface Props {
  mode: boolean;
}
const Logo: FunctionComponent<Props> = ({ mode }) => {
  return (
    <Wrapper>
      <LogoImg src={img} />
      <LogoText mode={mode}>Apptodo</LogoText>
    </Wrapper>
  );
};

export default Logo;
