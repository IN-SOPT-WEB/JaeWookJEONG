import React from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import palette from './style/palette';

const Modal = ({ onClose, quiz }) => {
  return (
    <Container>
      <WhiteBox>
        {quiz === true ? (
          <>
            <Title>정답입니다!</Title>
            <CloseButton onClick={onClose}>닫기</CloseButton>
          </>
        ) : (
          <>
            <Title>땡,,,</Title>
            <CloseButton onClick={onClose}>닫기</CloseButton>
          </>
        )}
      </WhiteBox>
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  background: rgba(0, 0, 0, 0.25);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WhiteBox = styled.div`
  background-color: white;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h3`
  text-align: center;
`;

const CloseButton = styled(Button)`
  width: 100%;
  padding: 0.5rem 0;
  font-weight: 600;
  background-color: ${palette.mainColor};
  color: white;
`;
