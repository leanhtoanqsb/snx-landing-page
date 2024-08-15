import { NewsCard } from '@/components/NewsCard';
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

export default function News() {
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
          Latest News
        </Heading>
        <Text
          mb="24px"
          fontSize="16px"
          lineHeight="24px"
          color="gray.500"
          fontWeight={400}
        >
          Multiple front ends have chosen to integrate Synthetix&apos;s
          composable and permissionless smart contracts
        </Text>
        <Box pt="100px">
          {mockData.map((data, index) => {
            return <NewsCard key={index} {...data} />;
          })}
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

const mockData = [
  {
    title: 'Test',
    description: 'Test description',
    imageUrl: '',
    link: '',
  },
];
