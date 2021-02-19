import styled from 'styled-components';

interface Props {
  mode: boolean;
}

export const Wrapper = styled.div<Props>`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;

  .headerText {
    font-size: 2rem;
    color: ${({ theme, mode }) => (mode ? `white` : theme.colors.blue.normal)};
    padding: 1rem 2rem;
    background-color: ${({ theme, mode }) =>
      mode ? theme.colors.blue.normal : theme.colors.gray.light};
  }
`;
