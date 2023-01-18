import styled from 'styled-components';
import { StyledButton } from '../components/Button';
import Layout from '../components/Layout';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledInput } from '../components/Input';

const WritePage = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    hint: '',
    content: '',
  });
  const navigate = useNavigate();

  const { username, password, hint, content } = inputs;

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const sendLetter = async () => {
    await axios.post('/api/write', {
      username,
      password,
      content,
      hint,
    });
    navigate('/');
  };

  return (
    <Layout>
      <Styled.Header>
        <Styled.Title>편지를 써보자</Styled.Title>
      </Styled.Header>
      <Styled.LetterForm>
        <Styled.LetterUser>
          <StyledInput
            type="text"
            value={username}
            name="username"
            onChange={onChange}
            placeholder="이름을 입력해주세요"
          />
          <StyledInput
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="비밀번호를 입력해주세요"
          />
          <StyledInput
            type="text"
            value={hint}
            name="hint"
            onChange={onChange}
            placeholder="비밀번호 힌트를 입력해주세요"
          />
        </Styled.LetterUser>
        <Styled.LetterContent name="content" value={content} onChange={onChange} />
        <Styled.LetterButtonBlock>
          <StyledButton type="button" onClick={sendLetter}>
            발송~
          </StyledButton>
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
  LetterForm: styled.form`
    width: 100%;
  `,
  LetterUser: styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
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
};
