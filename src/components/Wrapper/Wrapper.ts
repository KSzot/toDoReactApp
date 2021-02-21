import styled from 'styled-components';
import { device } from '../../utils/device';
const Wrapper = styled.div<{ mode: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  flex-basis: 70%;

  .layout-main {
    display: flex;
    flex-direction: row;
    background-color: transparent;
    flex-basis: 70%;
  }

  .layout-navigation {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 20%;
    background-color: ${({ mode, theme }) =>
      mode ? theme.colors.blue.light : `white`};
    margin: 1rem;
    border-radius: 1rem;
    padding: 3rem 0;

    @media ${device.tablet} {
      position: fixed;
      padding: 1rem 2rem;
      bottom: 0;
      width: 70%;
    }
  }

  .layout-content {
    display: flex;
    background-color: ${({ mode, theme }) =>
      mode ? theme.colors.blue.light : `white`};
    flex-basis: 100%;
    margin: 1rem;
    border-radius: 1rem;
  }
`;

export default Wrapper;
