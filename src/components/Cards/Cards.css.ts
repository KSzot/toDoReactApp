import styled from 'styled-components';

export const Container = styled.div<{
  mode: boolean;
  lengthText: number;
  bgColor: string;
}>`
  height: 20rem;
  width: 28rem;
  background-color: ${({ mode, theme, bgColor }) =>
    mode ? theme.colors.blue.normal : bgColor};
  border-radius: 0.8rem;
  overflow-y: ${({ lengthText }) => (lengthText > 25 ? 'scroll' : 'none')};
  font-size: 1.6rem;
  border-top: 0.6rem solid
    ${({ theme, mode }) =>
      mode ? theme.colors.primary.normal : theme.colors.gray.normal2};
  color: ${({ theme, mode }) => (mode ? 'white' : 'black')};
  .wrapper {
    position: relative;
    padding: 1rem;
    height: ${({ lengthText }) => (lengthText > 25 ? 'inhert' : '100%')};
  }
  .trash {
    position: absolute;
    bottom: 1rem;
    right: 1.5rem;
    font-size: 2.4rem;
    color: ${({ mode, theme }) => (mode ? 'white' : theme.colors.gray.dark)};
  }
`;
