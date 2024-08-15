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
    <Box pt="100px" pb="191px" width="100%" id="category" position="relative">
      <Box position="relative" zIndex={1}>
        <Box maxW="800px">
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
        </Box>
        <Box
          pt="100px"
          display="grid"
          width="100%"
          gridTemplateColumns={{
            base: '1fr',
            md: '1fr 1fr',
            xl: 'repeat(3, 1fr)',
          }}
          gap="24px"
        >
          {mockData.map((data, index) => {
            return <NewsCard key={index} {...data} />;
          })}
        </Box>
      </Box>
      <Box
        position="absolute"
        bgGradient="linear(to-tr, green.500, cyan.500)"
        width="618px"
        height="694px"
        left="-492px"
        top="238px"
        borderRadius="100%"
        filter="blur(250px)"
      />
    </Box>
  );
}

const mockData = [
  {
    title: 'Test',
    description:
      'Polynomial is a DeFi derivatives powerhouse that offers derivatives-based products built on top of Synthetix such as perps. Polynomial is a DeFi derivatives powerhouse that offers derivatives-based products built on top of Synthetix such as perps, power...',
    imageUri: '',
    link: '',
  },
  {
    title: 'Test',
    description:
      'Polynomial is a DeFi derivatives powerhouse that offers derivatives-based products built on top of Synthetix such as perps. Polynomial is a DeFi derivatives powerhouse that offers derivatives-based products built on top of Synthetix such as perps, power...',
    imageUri: '',
    link: '',
  },
  {
    title: 'Test',
    description:
      'Polynomial is a DeFi derivatives powerhouse that offers derivatives-based products built on top of Synthetix such as perps. Polynomial is a DeFi derivatives powerhouse that offers derivatives-based products built on top of Synthetix such as perps, power...',
    imageUri: '',
    link: '',
  },
];
