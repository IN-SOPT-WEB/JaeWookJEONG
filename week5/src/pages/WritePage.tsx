import styled from 'styled-components';
import { StyledButton } from '../components/Button';
import Layout from '../components/Layout';
import axios from 'axios';
import { useState } from 'react';

const WritePage = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    hint: '',
    content: '',
  });

  const { username, password, hint, content } = inputs;

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const writeLetter = async () => {
    await axios.post('/api/write', {
      username,
      password,
      content,
      hint,
    });
  };

  return (
    <Layout>
      <Styled.Header>
        <Styled.Title>편지를 써보자</Styled.Title>
      </Styled.Header>
      <Styled.LetterForm>
        <Styled.LetterUser>
          <Styled.LetterInput
            type="text"
            value={username}
            name="username"
            onChange={onChange}
            placeholder="이름을 입력해주세요"
          />
          <Styled.LetterInput
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="비밀번호를 입력해주세요"
          />
          <Styled.LetterInput
            type="text"
            value={hint}
            name="hint"
            onChange={onChange}
            placeholder="비밀번호 힌트를 입력해주세요"
          />
        </Styled.LetterUser>
        <Styled.LetterContent name="content" value={content} onChange={onChange} />
        <Styled.LetterButtonBlock>
          <StyledButton onClick={writeLetter}>발송~</StyledButton>
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
