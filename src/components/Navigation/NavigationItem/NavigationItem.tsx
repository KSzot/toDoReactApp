import React from 'react';
import { NavLink } from 'react-router-dom';
import { WrapperLi } from './Navigationitem.css';
const NavigationItem = (props: any) => (
  <WrapperLi bgColor={props.bgColor} bgColorHover={props.bgColorHover}>
    {/* <NavLink
      to={props.link}
      exact={props.exact}
      activeClassName={classes.active}
    >
      {props.children}
    </NavLink> */}
    <NavLink to={props.link} exact={props.exact}>
      <img className='image' src={props.imageSrc} alt='Nav' />
      <p className='title'>{props.children}</p>
    </NavLink>
  </WrapperLi>
);

export default NavigationItem;
