import styled from 'styled-components';
import { StyledButton } from '../components/Button';
import Layout from '../components/Layout';

const WritePage = () => {
  return (
    <Layout>
      <Styled.Header>
        <Styled.Title>편지를 써보자</Styled.Title>
      </Styled.Header>
      <Styled.LetterForm>
        <Styled.LetterUser>
          <Styled.LetterInput type="text" placeholder="이름을 입력해주세요" />
          <Styled.LetterInput type="password" placeholder="비밀번호를 입력해주세요" />
          <Styled.LetterInput type="text" placeholder="비밀번호 힌트를 입력해주세요" />
        </Styled.LetterUser>
        <Styled.LetterContent />
        <Styled.LetterButtonBlock>
          <StyledButton>발송~</StyledButton>
        </Styled.LetterButtonBlock>
      </Styled.LetterForm>
    </Layout>
  );
};

export default WritePage;

const Styled = {
  Header: styled.div`
    width: 100%;
  `,
  Title: styled.h2``,
  LetterForm: styled.div`
    width: 100%;
  `,
  LetterUser: styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  `,
  LetterInput: styled.input`
    width: 40%;
    outline: none;
    padding: 0.3rem;
    border-radius: 7px;
    border: 1px solid ${({ theme }) => theme.colors.green};

    & + & {
      margin-top: 1rem;
    }
  `,
  LetterContent: styled.textarea`
    width: 100%;
    height: 300px;
    outline: none;
    resize: none;
    margin-bottom: 1rem;
  `,
  LetterButtonBlock: styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
  `,
  LetterButton: styled.button``,
};
