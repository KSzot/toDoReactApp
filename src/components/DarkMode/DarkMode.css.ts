import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 4rem;
  height: 4rem;
  margin-left: 2rem;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.gray.light};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .dm-img {
    height: 100%;
  }
`;
