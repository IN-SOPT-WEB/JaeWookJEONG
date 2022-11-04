import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import Button from './components/Button';
import palette from './style/palette';

const Modal = ({ onClose, quiz, setModal }) => {
  const modelEl = useRef();

  useEffect(() => {
    const onClickOutside = e => {
      if (modelEl && modelEl.current.contains(e.target)) {
        setModal(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, [setModal]);

  return (
    <Container ref={modelEl}>
      {quiz === true ? (
        <WhiteBox correct>
          <Title>정답입니다!</Title>
          <CloseButton onClick={onClose}>닫기</CloseButton>
        </WhiteBox>
      ) : (
        <WhiteBox>
          <Title>땡,,,</Title>
          <CloseButton onClick={onClose}>닫기</CloseButton>
        </WhiteBox>
      )}
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

  ${props =>
    props.correct &&
    css`
      animation: smoothAppear 0.5s;
    `}
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
