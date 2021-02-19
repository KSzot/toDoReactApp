import styled from 'styled-components';

export const WrapperLi = styled.li<{ bgColor: string; bgColorHover: string }>`
  & a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    border-radius: 1rem;
    width: 9rem;
    height: 10rem;
    background-color: ${({ bgColor }) => bgColor};
    margin: 1rem 0;
    text-decoration: none;
  }

  & a:hover {
    transform: scale(1.05);
    background-color: ${({ bgColorHover }) => bgColorHover};
  }
  .image {
    width: 4rem;
    height: 4rem;
  }
  .title {
    font-size: 1.6rem;
    font-weight: 700;
    color: white;
  }
`;
