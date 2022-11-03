import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import Modal from './Modal';
import { quizAnswer, quizList } from './quizAnswer';
import palette from './style/palette';

const App = () => {
  const modalEl = useRef();
  const [score, setScore] = useState(0);
  const [isFinish, setIsFinish] = useState(false);
  const [modal, setModal] = useState(false);
  const [quiz, setQuiz] = useState(false);

  const onScore = answer => {
    if (answer === quizList[score].answer) {
      if (score === quizList.length - 1) {
        setIsFinish(!isFinish);
        setScore(0);
      }
      setQuiz(true);
      setScore(score + 1);
    } else {
      setQuiz(false);
    }
    setModal(true);
  };

  const onReset = () => {
    setScore(0);
  };

  const onClose = () => {
    setModal(false);
  };

  return (
    <>
      {modal && <Modal ref={modalEl} onClose={onClose} quiz={quiz} />}
      {isFinish === false ? (
        <Container>
          <HeaderBlock>월드컵에 과몰입 해보자!</HeaderBlock>
          <ContentBlock>
            <ScoreBlock>{score}</ScoreBlock>
            <Image src={quizList[score].src} alt={quizList[score].alt} />
            <ButtonBlock>
              {quizAnswer.map(quiz => (
                <CheckButton key={quiz.id} onClick={() => onScore(quiz.answer)}>
                  {quiz.answer}
                </CheckButton>
              ))}
            </ButtonBlock>
            <ResetButton onClick={onReset}>재도전</ResetButton>
          </ContentBlock>
        </Container>
      ) : (
        <span>1</span>
      )}
    </>
  );
};

export default App;

const Container = styled.div`
  width: 475px;
  margin: 0 auto;
`;

const HeaderBlock = styled.h2`
  text-align: center;
`;
const ContentBlock = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Image = styled.img`
  width: 100%;
  height: 300px;
`;
const ScoreBlock = styled.h3``;
const ButtonBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`;

const CheckButton = styled(Button)`
  background-color: white;
  border: 1px solid ${palette.mainColor};
  border-radius: 7px;
`;
const ResetButton = styled(Button)`
  width: 100%;
  padding: 0.5rem 0;
  font-weight: 600;
  background-color: ${palette.mainColor};
  color: white;
  border-radius: 7px;
`;
