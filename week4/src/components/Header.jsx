import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Heading,
  Box,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Header = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getGithub = async () => {
      const res = await axios.get('/api/products');
      setUsers(res.data.items);
    };
    getGithub();
  }, []);

  return (
    <Box>
      <Heading>Github Profile Finder</Heading>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  누구꺼 볼래?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {users.map(user => (
                <Box key={user.id} flex="1" textAlign="left">
                  {user.user}
                </Box>
              ))}
            </AccordionPanel>
          </AccordionItem>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Header;
