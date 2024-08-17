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
} from '@chakra-ui/react';

export default function Description() {
  return (
    <Box
      py="100px"
      width="100%"
      id="hero"
      position="relative"
      maxW="800px"
      zIndex={2}
    >
      <Text color="gray.500" fontSize="16px" lineHeight="24px">
        SYNTHETIX ECOSYSTEM
      </Text>
      <Heading
        fontSize="48px"
        lineHeight="60px"
        as="h2"
        color="gray.50"
        mb="16px"
      >
        An Ecosystem of DeFi Apps Powered by Synthetix
      </Heading>
      <Text color="gray.500" fontSize="16px" lineHeight="24px">
        Explore the growing ecosystem of decentralized apps built on top of
        Synthetix liquidity. The Synthetix ecosystem is comprised of derivatives
        exchanges, sUSD utility, and more
      </Text>
    </Box>
  );
}
