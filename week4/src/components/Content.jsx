import { Box, Button, CloseButton, Flex, Image, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useGetUser from '../hoc/useGetUserInfoHook';
import Layout from './Layout';
import { Spinner } from '@chakra-ui/react';

const Content = () => {
  const [user, setUser] = useState({});
  const { username } = useParams();
  const { userInfo, isLoading, isError } = useGetUser(username);

  useEffect(() => {
    setUser(userInfo);
  }, [userInfo]);

  if (isError)
    return (
      <Text mt="10rem" fontSize="25px" color="red">
        찾는 사람이 없습니다!
      </Text>
    );
  if (isLoading) return <React.Suspense fallback={<Spinner mt="10rem" />} />;

  return (
    <Layout>
      <Box w="300px">
        <Flex m={4} flexDirection="column" alignItems="center" justifyContent="center">
          <CloseButton onClick={() => window.location.replace('/search')} />
          <Image fallbackSrc="https://via.placeholder.com/150" src={user?.avatar_url} w={150} />
          <Text as="b" fontSize="2xl">
            {user?.login}
          </Text>
          <Text as="b">{user?.name}</Text>
          <Button variant="outline" onClick={() => window.open(user.html_url, '_blank')}>
            visit
          </Button>
          <Flex w="100%" justifyContent="space-between">
            <Box>
              <Text>Followers</Text>
              <Text>{user?.followers}</Text>
            </Box>
            <Box>
              <Text>Following</Text>
              <Text>{user?.following}</Text>
            </Box>
            <Box>
              <Text>Repos</Text>
              <Text>{user?.public_repos}</Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Layout>
  );
};

export default Content;
