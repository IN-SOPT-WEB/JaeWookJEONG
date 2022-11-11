import React, { useState, useEffect } from 'react';
import {
  Heading,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Input,
  ListItem,
  UnorderedList,
  CloseButton,
  Flex,
} from '@chakra-ui/react';
import { useNavigate, Outlet } from 'react-router-dom';
import Layout from './Layout';
import useGetUserList from '../hoc/useGetUserList';

const Header = () => {
  const [inputs, setInputs] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState(JSON.parse(localStorage.getItem('history') || '[]'));
  const [usersList, setUsersList] = useState([]);
  const navigate = useNavigate();
  const { userList } = useGetUserList();

  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(history));
  }, [history]);

  const onAddHistory = text => {
    const newHistory = {
      id: Date.now(),
      text: text,
    };
    setHistory([newHistory, ...history]);
  };

  const onRemoveHistory = id => {
    const removeHistory = history.filter(history => {
      return history.id !== id;
    });
    setHistory(removeHistory);
  };

  const onChange = e => {
    setInputs(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    navigate(`/search/${inputs}`);
    setInputs('');
    setIsOpen(false);
    onAddHistory(inputs);
  };

  useEffect(() => {
    setUsersList(userList?.items);
  }, [userList]);

  return (
    <Layout>
      <Box>
        <Heading>Github Profile Finder</Heading>
        <form onSubmit={onSubmit}>
          <Input
            placeholder="다른 사람 찾을래?"
            value={inputs}
            onChange={onChange}
            onFocus={() => setIsOpen(!isOpen)}
          />
        </form>
        {isOpen && (
          <Box boxShadow="base" border="1px" borderColor="gray.200" mt="10px" borderRadius="10px">
            <UnorderedList listStyleType="none">
              {history.map(input => (
                <Flex
                  _hover={{ bg: 'lightgray' }}
                  p="10px"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <ListItem key={input.id} onClick={() => navigate(`/search/${input.text}`)}>
                    {input.text}
                  </ListItem>
                  <CloseButton onClick={() => onRemoveHistory(input.id)} />
                </Flex>
              ))}
            </UnorderedList>
          </Box>
        )}
        <Breadcrumb>
          {usersList?.map(user => (
            <BreadcrumbItem key={user.id}>
              <BreadcrumbLink fontSize="15px" onClick={() => navigate(`/search/${user.github}`)}>
                {user.user}
              </BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
      </Box>
      <Outlet />
    </Layout>
  );
};

export default Header;
