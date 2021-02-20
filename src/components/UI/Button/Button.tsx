import React, { FunctionComponent, useMemo, Fragment } from 'react';
import { CircleButton, SquareButton } from './Button.css';
import { Shape } from '../../../helpers';
interface ButtonProps {
  variant: string;
  bcColor?: string;
  bcColorHover?: string;
  clicked?: () => void;
}
const Button: FunctionComponent<ButtonProps> = ({
  variant,
  bcColor,
  bcColorHover,
  clicked,
  children,
}) => {
  const Component = useMemo(() => {
    switch (variant) {
      case Shape.square:
        return SquareButton;
      case Shape.circle:
        return CircleButton;

      default:
        return SquareButton;
    }
  }, [variant]);

  const customButton = useMemo(() => {
    return (
      <Component
        bcColor={bcColor}
        bcColorHover={bcColorHover}
        onClick={clicked}
      >
        {children}
      </Component>
    );
  }, [variant, bcColor, bcColorHover, clicked, children]);

  return <Fragment>{customButton}</Fragment>;
};

export default Button;
