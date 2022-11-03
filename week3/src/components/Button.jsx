import React from 'react';
import styled from 'styled-components';

const Button = props => {
  return <StyledButton {...props} />;
};

export default Button;

const StyledButton = styled.button`
  outline: none;
  cursor: pointer;
  border: 0;
  font-size: 17px;
`;
