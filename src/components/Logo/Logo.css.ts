import styled from 'styled-components';

interface Props {
  src: string;
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoImg = styled.img<Props>`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.blue.normal};
`;

export const LogoText = styled.h1<{ mode: boolean }>`
  font-size: 2.5rem;
  color: ${({ theme, mode }) => (mode ? `white` : theme.colors.primary.normal)};
  margin-left: 2rem;
`;
