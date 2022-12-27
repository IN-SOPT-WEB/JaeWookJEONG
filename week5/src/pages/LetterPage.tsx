import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { StyledButton } from '../components/Button';
import Layout from '../components/Layout';
import { useState } from 'react';
import { LetterProps } from '../types';

const LetterPage = () => {
  const [letters, setLetters] = useState<LetterProps[]>();
  const navigate = useNavigate();

  useEffect(() => {
    const getLetter = async () => {
      const response = await axios.get('/api/letters');
      setLetters(JSON.parse(response.data));
    };

    getLetter();
  }, []);
  return (
    <Layout>
      <Styled.Header>
        <Styled.Title>편지함</Styled.Title>
        <StyledButton onClick={() => navigate('/write')}>편지쓰기</StyledButton>
      </Styled.Header>
      <Styled.Content>
        {letters?.map((letter, idx) => (
          <Styled.LetterItem key={idx}>
            <Styled.ContentText>{letter.username}</Styled.ContentText>
          </Styled.LetterItem>
        ))}
      </Styled.Content>
    </Layout>
  );
};

export default LetterPage;

const Styled = {
  Header: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  `,
  Title: styled.h2`
    text-align: center;
  `,
  Content: styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  `,
  ContentText: styled.h2`
    margin: 0;
  `,
  LetterItem: styled.div`
    border: 1px solid ${({ theme }) => theme.colors.red};
    height: 200px;
    text-align: center;
    line-height: 200px;
  `,
};
