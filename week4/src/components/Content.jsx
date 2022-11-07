import { Box, Button, CloseButton, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Content = () => {
  return (
    <Box>
      <CloseButton />
      <Image fallbackSrc="https://via.placeholder.com/150" />
      <Text as="b" fontSize="2xl">
        이름
      </Text>
      <Text as="b">닉네임</Text>
      <Button variant="outline">visit</Button>
      <Flex justifyContent="space-between">
        <Box w="30%">
          <Text>Followers</Text>
          <Text>2</Text>
        </Box>
        <Box w="30%">
          <Text>Following</Text>
          <Text>2</Text>
        </Box>
        <Box w="30%">
          <Text>Repos</Text>
          <Text>2</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Content;
