import styled from 'styled-components';
import { device } from '../../utils/device';

export const Container = styled.div<{ mode: boolean }>`
  display: block;
  width: 35%;
  margin: 1rem;

  @media ${device.mobileXL} {
    width: 48%;
  }

  & h2 {
    font-size: 2.4rem;
    color: ${({ theme, mode }) => (mode ? `white` : `black`)};
    text-align: center;
  }

  & ul {
    list-style: none;
    width: 100%;
    margin: 0 auto;
    padding: 0.1rem 0 1rem 0;
    border-radius: 1rem;
    background-color: ${({ theme, mode }) =>
      mode ? theme.colors.gray.normal2 : theme.colors.gray.light};
    min-height: 85%;
  }
`;
