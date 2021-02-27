import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { DefaultTheme } from './utils/theme';
import { device } from './utils/device';

export default createGlobalStyle<{ theme: DefaultTheme; mode: boolean }>`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  // This defines what 1rem is
  font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%

  @media ${device.tablet} {
    font-size: 50%;
  }

}

body {
  box-sizing: border-box;
  font-weight: 400;
  line-height: 1.7;

  background-color: ${(props) =>
    props.mode
      ? props.theme.colors.blue.normal
      : props.theme.colors.primary.normal};
    margin: 10rem 15rem 0 15rem;

    @media ${device.laptopL} {
      margin: 5rem 5rem 0 5rem;
    }

    @media ${device.mobileXL} {
      margin: 1% 1% 0 1%;
    }
}



/* ${normalize}

html {
  font-size: 62.5%;
}
body{
    background-color: ${(props) =>
      props.mode
        ? props.theme.colors.blue.normal
        : props.theme.colors.primary.normal};
    margin: 10rem 15rem 0 15rem;

    @media ${device.laptopL} {
      margin: 5rem 5rem 0 5rem;
    }
} */

`;

export const Container = styled.div<{ mode: boolean }>`
  display: flex;
  flex-direction: row;
  //background-color: ${({ theme }) => theme.colors.gray.normal};
  background-color: ${({ mode, theme }) =>
    mode ? theme.colors.blue.normal : theme.colors.gray.normal};

  @media ${device.laptopL} {
    flex-direction: column;
  }

  .container-right {
    display: flex;
    background-color: ${({ mode, theme }) =>
      mode ? theme.colors.blue.light : `white`};
    flex-direction: column;
    flex-basis: 30%;
    margin: 1rem;
    border-radius: 1rem;
    align-items: center;

    &__topButton {
      display: flex;
      justify-content: space-between;
      width: 50%;
    }
  }
`;
