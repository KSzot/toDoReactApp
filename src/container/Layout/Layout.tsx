import React, { Fragment, FunctionComponent } from 'react';
import { Wrapper, Header } from '../../components';
import { NavigationItems } from '../../components';

interface Props {
  mode: boolean;
}

const Layout: FunctionComponent<Props> = (props) => {
  return (
    <Fragment>
      <Wrapper mode={props.mode}>
        <Header />
        <div className='layout-main'>
          <div className='layout-navigation'>
            <NavigationItems />
          </div>
          <div className='layout-content'>{props.children}</div>
        </div>
      </Wrapper>
    </Fragment>
  );
};

export default Layout;
