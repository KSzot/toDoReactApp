import styled from 'styled-components';

export const DisplayLi = styled.li<{
  mode: boolean;
  completed: boolean;
}>`
  //text-align: center;
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  border: 2px solid
    ${({ theme, completed }) =>
      completed ? theme.colors.orange.normal : theme.colors.taskIcon.normal};
  background-color: ${({ theme, mode, completed }) =>
    mode
      ? theme.colors.blue.normal
      : completed
      ? theme.colors.orange.light
      : theme.colors.taskIcon.light};
  padding: 0.8rem 1rem;
  margin: 1rem 0.8rem 0 0.8rem;
  border-radius: 4px;
  color: ${({ theme, mode }) => (mode ? 'white' : 'black')};
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};

  .dl-square {
    color: white;
    border: 1px solid black;
    cursor: pointer;
    font-size: 1.8rem;
    margin-right: 0.4rem;
  }

  .dl-close {
    margin-left: auto;
    cursor: pointer;
  }
`;
