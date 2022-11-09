import React, { useState, useEffect } from 'react';
import { Heading, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Input } from '@chakra-ui/react';
import { getUserList } from '../api/githubAPI';
import { useNavigate, Outlet } from 'react-router-dom';
import Layout from './Layout';

const Header = () => {
  const [inputs, setInputs] = useState('');
  const [usersList, setUsersList] = useState([]);
  const navigate = useNavigate();

  const onChange = e => {
    setInputs(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    navigate(`/search/${inputs}`);
    setInputs('');
  };

  useEffect(() => {
    const getGithub = async () => {
      const res = await getUserList();
      setUsersList(res);
    };
    getGithub();
  }, []);

  return (
    <Layout>
      <Box>
        <Heading>Github Profile Finder</Heading>
        <form onSubmit={onSubmit}>
          <Input placeholder="다른 사람 찾을래?" value={inputs} onChange={onChange} />
        </form>
        <Breadcrumb>
          {usersList.map(user => (
            <BreadcrumbItem key={user.id}>
              <BreadcrumbLink onClick={() => navigate(`/search/${user.github}`)}>
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
