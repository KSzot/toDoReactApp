import styled from 'styled-components';
import { device } from '../../utils/device';

export const Container = styled.div<{ mode: boolean }>`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  padding: 2rem 1rem;
  .bored {
    &__header {
      color: ${({ theme, mode }) => (mode ? 'white' : 'black')};
      text-align: center;
      &--primary {
        font-size: 3rem;
        font-weight: 700;
      }
      &--secondary {
        font-size: 2rem;
        color: ${({ theme, mode }) =>
          mode ? 'white' : theme.colors.gray.normal2};
      }
    }

    &__main {
      margin: 5%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media ${device.tabletL} {
        margin: 5% 0;
      }
      @media ${device.mobileL} {
        flex-wrap: wrap;
        justify-content: center;
      }
    }

    &__img {
      width: 20rem;
      height: 20rem;
    }
    &__randomActiv {
      width: 29rem;
      min-height: 20rem;
      border: 2px solid
        ${({ mode, theme }) => (mode ? 'white' : theme.colors.gray.normal)};
      border-radius: 1rem;
      background-color: ${({ theme, mode }) =>
        mode ? theme.colors.blue.normal : 'white'};
      display: flex;
      flex-direction: column;
      padding: 2rem 1rem;
      align-items: center;
      margin-right: 20%;
      position: relative;
      @media ${device.tabletL} {
        margin: 0;
      }
      &--text {
        margin-top: 5%;
        font-size: 2.6rem;
        color: ${({ theme, mode }) =>
          mode ? 'white' : theme.colors.gray.normal2};
        text-align: center;
      }
    }
  }

  .customSpinner {
    font-size: 5rem;
    position: absolute;
    top: 50%;
    left: 45%;
    transform: translate(-50%, -50%);
  }
  .itemCenter {
    text-align: center;
  }
`;
