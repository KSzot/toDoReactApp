import styled from 'styled-components';

interface Props {
  margin: boolean;
  padding: boolean;
  mode?: boolean;
}

export const Wrapper = styled.div<Props>`
  display: flex;
  /* background-color: white; */
  background-color: ${({ mode, theme }) =>
    mode ? theme.colors.blue.light : `white`};

  justify-content: space-between;
  align-items: center;
  border-radius: 1rem;
  border-left: 1rem solid ${({ theme }) => theme.colors.primary.normal};
  padding: ${(props) => (props.padding ? '1rem 2rem' : '0 2rem')};
  margin: ${(props) => (props.margin ? '1rem' : '0')};
`;
