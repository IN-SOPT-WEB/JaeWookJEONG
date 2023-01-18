import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  text-align: right;
  background-color: ${({ theme }) => theme.colors.ivory};
  border: 1px solid ${({ theme }) => theme.colors.green};
  border-radius: 7px;
  padding: 0.5rem 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.green};
  font-size: 20px;
`;
