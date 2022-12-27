import styled from 'styled-components';

interface InputProps {
  fullWidth?: string;
}
export const StyledInput = styled.input<InputProps>`
  width: 40%;
  outline: none;
  padding: 0.3rem;
  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.colors.green};

  & + & {
    margin-top: 1rem;
  }

  width: ${props => (props.fullWidth ? '100%' : '40%')};
`;
