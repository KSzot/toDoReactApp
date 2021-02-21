import styled from 'styled-components';
import { device } from '../../utils/device';
export const WrapperUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;
