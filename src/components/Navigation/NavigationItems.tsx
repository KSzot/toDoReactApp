import React from 'react';
import { WrapperUl } from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import taskIcon from '../../img/taskIcon.png';
import noteIcon from '../../img/noteIcon.png';
import faceIcon from '../../img/faceIcon.png';
import { theme } from '../../utils/theme';
const NavigationItems = () => (
  <WrapperUl>
    {/* <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
        <NavigationItem link="/auth">Authenticate</NavigationItem> */}
    <NavigationItem
      imageSrc={taskIcon}
      bgColor={theme.colors.taskIcon.light}
      bgColorHover={theme.colors.taskIcon.normal}
      link='/'
      exact
    >
      Tasks
    </NavigationItem>
    <NavigationItem
      imageSrc={noteIcon}
      bgColor={theme.colors.notesIcon.light}
      bgColorHover={theme.colors.notesIcon.normal}
      link='/notes'
    >
      Nodes
    </NavigationItem>
    <NavigationItem
      imageSrc={faceIcon}
      bgColor={theme.colors.boredIcon.light}
      bgColorHover={theme.colors.boredIcon.normal}
      link='/bored'
    >
      Bored ?
    </NavigationItem>
  </WrapperUl>
);

export default NavigationItems;
