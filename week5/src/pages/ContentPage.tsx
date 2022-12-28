import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { StyledInput } from '../components/Input';
import Layout from '../components/Layout';
import { useGetLetterHook } from '../hooks/useGetLetterHook';

interface LetterIdLocation {
  state: { letterId: number };
}

const ContentPage = () => {
  const [input, setInput] = useState('');
  const [check, setCheck] = useState<boolean>(false);
  const { letterList } = useGetLetterHook();
  const { state } = useLocation() as LetterIdLocation;
  const { letterId } = state;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (letterId) {
      if (input === letterList[letterId].password) {
        setCheck(true);
      } else {
        setCheck(false);
        alert('비밀번호 틀렸다!');
      }
    }
  };

  return (
    <Layout>
      {check === false ? (
        <Styled.CheckPassword>
          <Styled.PasswordForm onSubmit={onSubmit}>
            <Styled.PasswordText>hint : {letterList[letterId]?.hint}</Styled.PasswordText>
            <StyledInput
              fullWidth="fullWidth"
              type="password"
              value={input}
              placeholder="비밀번호를 입력해주세요"
              onChange={onChange}
            />
          </Styled.PasswordForm>
        </Styled.CheckPassword>
      ) : (
        <Styled.Content>
          <Styled.ContentTitleBlock>
            <Styled.ContentTitle>작성자 : {letterList[letterId]?.username}</Styled.ContentTitle>
          </Styled.ContentTitleBlock>
          <Styled.ContentTitle> {letterList[letterId]?.content}</Styled.ContentTitle>
        </Styled.Content>
      )}
    </Layout>
  );
};

export default ContentPage;

const Styled = {
  CheckPassword: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  PasswordText: styled.h2``,
  PasswordInput: styled.input``,
  PasswordForm: styled.form``,
  Content: styled.div``,
  ContentTitleBlock: styled.div`
    border-bottom: 5px dashed ${({ theme }) => theme.colors.red};
  `,
  ContentTitle: styled.h2``,
  ContentText: styled.p``,
};
