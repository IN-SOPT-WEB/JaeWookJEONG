import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Heading,
  Box,
} from '@chakra-ui/react';
import React from 'react';

const Header = () => {
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
              <Box flex="1" textAlign="left">
                Section 1 title
              </Box>
              <Box flex="1" textAlign="left">
                Section 1 title
              </Box>
              <Box flex="1" textAlign="left">
                Section 1 title
              </Box>
              <Box flex="1" textAlign="left">
                Section 1 title
              </Box>
              <Box flex="1" textAlign="left">
                Section 1 title
              </Box>
              <Box flex="1" textAlign="left">
                Section 1 title
              </Box>
              <Box flex="1" textAlign="left">
                Section 1 title
              </Box>
              <Box flex="1" textAlign="left">
                Section 1 title
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Header;
