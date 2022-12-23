import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { UserGihubDate } from "../types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Content = () => {
  const [github, setGithub] = useState<UserGihubDate>();
  const { username } = useParams();

  useEffect(() => {
    const getUserInfo = async () => {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setGithub(response.data);
    };
    getUserInfo();
  }, [username]);

  return (
    <Styled.Root>
      <Link to="/search">
        <Styled.Close>닫기</Styled.Close>
      </Link>
      <Styled.Image src={github?.avatar_url} />
      <Styled.UserInfo>
        <Styled.Username>{github?.login}</Styled.Username>
        <Styled.Nickname>{github?.name}</Styled.Nickname>
      </Styled.UserInfo>
      <Styled.GithubInfo>
        <Styled.Repos>{github?.public_repos}</Styled.Repos>
        <Styled.Following>{github?.following}</Styled.Following>
        <Styled.Followers>{github?.followers}</Styled.Followers>
      </Styled.GithubInfo>
    </Styled.Root>
  );
};

export default Content;

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  `,
  Close: styled.button`
    cursor: pointer;
  `,
  Image: styled.img`
    width: 150px;
    height: 150px;
  `,
  UserInfo: styled.div``,
  Username: styled.h2`
    margin: 0;
  `,
  Nickname: styled.h2`
    margin: 0;
  `,
  GithubInfo: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  Repos: styled.div``,
  Followers: styled.div``,
  Following: styled.div``,
};
