import styled, { css } from 'styled-components';
import { StyledButton } from './components/Button';

interface ModalProps {
  handleModalClose: () => void;
  isQuiz: boolean;
}

const Modal = (props: ModalProps) => {
  const { handleModalClose, isQuiz } = props;
  return (
    <Container>
      {isQuiz ? (
        <WhiteBox correct={true}>
          <Title>정답입니다!</Title>
          <CloseButton onClick={handleModalClose}>닫기</CloseButton>
        </WhiteBox>
      ) : (
        <WhiteBox>
          <Title>땡,,,</Title>
          <CloseButton onClick={handleModalClose}>닫기</CloseButton>
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

const WhiteBox = styled.div<{ correct?: boolean }>`
  background-color: white;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;

  ${({ correct }) =>
    correct &&
    css`
      animation: smoothAppear 0.8s;
    `}
`;
const Title = styled.h3`
  text-align: center;
`;

const CloseButton = styled(StyledButton)`
  width: 100%;
  padding: 0.5rem 0;
  font-weight: 600;
  background-color: #70193d;
  color: white;
`;
