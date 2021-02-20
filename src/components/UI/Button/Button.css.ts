import styled from 'styled-components';

export const CustomButton = styled.button<{
  bcColor?: string;
  bcColorHover?: string;
}>`
  display: flex;
  padding: 1.5rem 2rem;
  background: ${({ theme, bcColor }) =>
    bcColor ? bcColor : theme.colors.primary.normal};
  border: none;
  cursor: pointer;
  color: white;
  font-size: 1.6rem;
  transition: background 0.4s ease;
  font-weight: 600;
  align-self: flex-start;
  &:hover {
    background: ${({ theme, bcColorHover }) =>
      bcColorHover ? bcColorHover : theme.colors.primary.dark};
  }

  &:focus {
    outline: none;
  }
`;

export const SquareButton = styled(CustomButton)`
  border-radius: 4px;
`;

export const CircleButton = styled(CustomButton)`
  border-radius: 50%;
`;
