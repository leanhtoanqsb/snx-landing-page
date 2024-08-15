import Spartan from '@/svg/Spartan';
import { Link } from '@chakra-ui/next-js';
import {
  Box,
  Button,
  Flex,
  Show,
  Text,
  Image,
  Heading,
  Select,
} from '@chakra-ui/react';

export default function Category() {
  return (
    <Box width="100%" id="category" position="relative">
      <Box py="100px" position="relative" zIndex={1} maxW="800px">
        <Heading
          fontSize={{ base: '48px', md: '60px' }}
          maxW={{ md: '483px' }}
          as="h2"
          color="gray.50"
          mb="16px"
        >
          Browse By Category
        </Heading>
        <Text
          mb="24px"
          fontSize="16px"
          lineHeight="24px"
          color="gray.500"
          fontWeight={400}
        >
          Explore the growing ecosystem of decentralized apps built on top of
          Synthetix liquidity. The Synthetix ecosystem is comprised of
          derivatives exchanges, sUSD utility, and more
        </Text>
        <Box pt="100px">
          <Flex gap="12px">
            <Select value="option1" width="max-content">
              <option value="option1">All Network</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Select value="option1" width="max-content">
              <option value="option1">All Network</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Select value="option1" width="max-content">
              <option value="option1">All Network</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Flex>
        </Box>
      </Box>
      <Box
        position="absolute"
        // backgroundImage="linear-gradient(44deg, #34EDB3 0%, #00D1FF 100%)"
        backgroundColor="cyan.600"
        width="618px"
        height="694px"
        left="-492px"
        top="-138px"
        borderRadius="100%"
        filter="blur(250px)"
      />
    </Box>
  );
}
