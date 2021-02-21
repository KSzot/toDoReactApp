import styled from 'styled-components';
import { device } from '../../utils/device';
export const Container = styled.div<{ mode: boolean }>`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  padding: 2rem 1rem;

  .task-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem;

    @media ${device.mobileXL} {
      flex-wrap: wrap;
    }
    &--inputDiv {
      display: flex;

      & input {
        display: block;
        padding: 1rem 2rem;
        border-radius: 4px;
        text-decoration: none;
        border: none;
        background-color: ${({ theme, mode }) =>
          mode ? theme.colors.blue.normal : theme.colors.gray.light};
        margin: 0 1rem;
        width: 35rem;
        font-size: 1.6rem;
        color: ${({ theme, mode }) =>
          mode ? `white` : theme.colors.gray.dark};

        @media ${device.tabletL} {
          width: 100%;
        }
      }
      & input:focus {
        outline: none;
      }
    }

    &--text {
      font-size: 2rem;
      margin-right: 2rem;

      & span {
        margin-right: 1rem;
        background-color: ${({ theme, mode }) =>
          mode ? theme.colors.blue.normal : theme.colors.gray.light};
        font-weight: 700;
        color: ${({ theme }) => theme.colors.taskIcon.normal};
        border-radius: 4px;
        font-size: 2.4rem;
        padding: 0.3rem 0.6rem;
      }
    }
  }
  .task-main {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    &--content {
      display: flex;
      justify-content: center;
      overflow-y: scroll;
      height: 30rem;

      @media ${device.tabletL} {
        justify-content: space-evenly;
      }
      @media ${device.mobileXL} {
        justify-content: space-between;
      }
      @media ${device.mobileL} {
        justify-content: center;
      }
    }
  }
`;
