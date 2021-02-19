import React, { FunctionComponent } from 'react';
import { Wrapper } from './Datetime.css';

interface Props {
  children: string;
  mode: boolean;
}

const Datetime: FunctionComponent<Props> = (props) => {
  return (
    <Wrapper mode={props.mode}>
      <p className='headerText'>{props.children}</p>
    </Wrapper>
  );
};

export default Datetime;
