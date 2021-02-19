import React, { FunctionComponent } from 'react';
import { Wrapper } from './DarkMode.css';

interface Props {
  img: string;
  onClick: () => void;
}

const DarkMode: FunctionComponent<Props> = (props) => {
  return (
    <Wrapper onClick={props.onClick}>
      <img src={props.img} alt='Logo' />
    </Wrapper>
  );
};

export default DarkMode;
