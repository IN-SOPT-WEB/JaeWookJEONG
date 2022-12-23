import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { UserData } from "../types";
import { Outlet, useNavigate } from "react-router-dom";
import Layout from "./Layout";

const Header = () => {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);
  const [histories, setHistories] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserList = async () => {
      const response = await axios.get("/api/users");
      setUsers(response.data.items);
    };
    getUserList();
  }, []);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(histories));
  }, [histories]);

  const addHistory = (userId: string) => {
    if (histories.includes(userId)) return;
    setHistories([...histories, userId]);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${input}`);
    addHistory(input);
    setInput("");
  };

  return (
    <Layout>
      <Styled.Root>
        <Styled.H1>Github Profile Finder</Styled.H1>
        <Styled.InputForm onSubmit={onSubmit}>
          <Styled.Input
            type="text"
            placeholder="Github username.."
            value={input}
            onChange={onChange}
          />
          <Styled.History>
            {histories.map((history, idx) => (
              <Styled.HistoryItems key={idx}>{history}</Styled.HistoryItems>
            ))}
          </Styled.History>
        </Styled.InputForm>
        <Styled.UserBlock>
          {users?.map((user: UserData) => (
            <Styled.UserItem
              key={user.id}
              onClick={() => navigate(`/search/${user.github}`)}
            >
              {user.user} /
            </Styled.UserItem>
          ))}
        </Styled.UserBlock>
      </Styled.Root>
      <Outlet />
    </Layout>
  );
};

export default Header;

const Styled = {
  Root: styled.div``,
  H1: styled.h1``,
  InputForm: styled.form``,
  Input: styled.input`
    width: 100%;
  `,
  UserBlock: styled.div``,
  UserItem: styled.span`
    cursor: pointer;
  `,
  History: styled.div`
    width: 100%;
    background-color: lightgray;
    margin-bottom: 1rem;
  `,
  HistoryItems: styled.div`
    padding: 0.5rem;
    border-bottom: 1px solid black;
  `,
};
