import React, { FunctionComponent } from 'react';
import { CustomButton } from './Button.css';

interface ButtonProps {
  bcColor?: string;
  bcColorHover?: string;
  clicked?: () => void;
}
const Button: FunctionComponent<ButtonProps> = ({
  bcColor,
  bcColorHover,
  clicked,
  children,
}) => (
  <CustomButton bcColor={bcColor} bcColorHover={bcColorHover} onClick={clicked}>
    {children}
  </CustomButton>
);

export default Button;
