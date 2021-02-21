import styled from 'styled-components';

export const Container = styled.div<{ mode: boolean; lengthText: number }>`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  padding: 2rem 1rem;
  .notes-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 1rem;

    &--title {
      color: ${({ theme, mode }) => (mode ? 'white' : 'black')};
      font-size: 3rem;
      font-weight: 700;
    }

    &__div {
      display: flex;

      & input {
        padding: 1rem 2rem;
        border-radius: 4px;
        text-decoration: none;
        border: none;
        background-color: ${({ theme, mode }) =>
          mode ? theme.colors.blue.normal : theme.colors.gray.light};
        margin: 0 1rem;
        max-width: 35rem;
        font-size: 1.6rem;
        color: ${({ theme, mode }) =>
          mode ? `white` : theme.colors.gray.dark};
      }
      & input:focus {
        outline: none;
      }
    }
  }
  .notes-main {
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    overflow-y: scroll;
    gap: 5rem;
    height: 30rem;
    flex-wrap: wrap;
  }
`;
