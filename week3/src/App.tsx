import { useState } from 'react';
import styled from 'styled-components';
import { StyledButton } from './components/Button';
import Modal from './Modal';
import { quizAnswer, quizList } from './quizAnswer';
import GlobalStyles from './style/GlobalStyles';
import WorldCup from './assets/image/Worldcup.jpeg';

const App = () => {
  const [score, setScore] = useState(0);
  const [isFinish, setIsFinish] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isQuiz, setIsQuiz] = useState(false);

  const handleScore = (answer: string) => {
    if (answer === quizList[score].answer) {
      if (score === quizList.length - 1) {
        setIsFinish(!isFinish);
        setScore(0);
      }
      setIsQuiz(true);
      setScore(score + 1);
    } else {
      setIsQuiz(false);
    }
    setIsModal(true);
  };

  const handleReset = () => {
    setScore(0);
    setIsFinish(false);
  };

  const handleModalClose = () => {
    setIsModal(false);
  };

  return (
    <>
      <GlobalStyles />
      {isModal && <Modal handleModalClose={handleModalClose} isQuiz={isQuiz} />}
      <Container>
        <HeaderBlock>월드컵에 과몰입 해보자!</HeaderBlock>
        <ContentBlock>
          <ScoreBlock>내 점수 : {score}</ScoreBlock>
          {isFinish === false ? (
            <>
              <Image src={quizList[score].src} alt={quizList[score].alt} />
              <ButtonBlock>
                {quizAnswer.map(quiz => (
                  <CheckButton key={quiz.id} onClick={() => handleScore(quiz.answer)}>
                    {quiz.answer}
                  </CheckButton>
                ))}
              </ButtonBlock>
              <ResetButton onClick={handleReset}>재도전</ResetButton>
            </>
          ) : (
            <>
              <ScoreBlock>대한민국 퐈이팅~</ScoreBlock>
              <Image src={WorldCup} alt="finalImage" />
              <ResetButton onClick={handleReset}>재도전</ResetButton>
            </>
          )}
        </ContentBlock>
      </Container>
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
const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  margin: 1rem;
  border-radius: 50%;
  filter: drop-shadow(5px 5px 5px #000);
`;
const ScoreBlock = styled.h2``;
const ButtonBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`;

const CheckButton = styled(StyledButton)`
  background-color: white;
  border: 1px solid #70193d;
  border-radius: 7px;
  padding: 0.3rem;

  &:hover {
    background-color: #70193d;
    color: white;
    font-weight: bold;
  }
`;
const ResetButton = styled(StyledButton)`
  width: 100%;
  padding: 0.5rem 0;
  font-weight: 600;
  background-color: #70193d;
  color: white;
  border-radius: 7px;
`;
