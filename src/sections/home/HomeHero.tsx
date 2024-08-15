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

export default function HomeHero() {
  return (
    <Box pt="187px" pb="66px" width="100%" id="hero" position="relative">
      <Box
        position="relative"
        zIndex={1}
        width={{ base: '100%', lg: '525px', '2xl': '628px' }}
      >
        <Heading
          fontSize={{ base: '48px', md: '60px' }}
          maxW={{ md: '483px' }}
          as="h2"
          color="gray.50"
          mb="16px"
        >
          They&apos;re All Integrating on Synthetix
        </Heading>
        <Text
          mb="24px"
          fontSize="16px"
          lineHeight="24px"
          color="gray.500"
          fontWeight={400}
        >
          Synthetix is a decentralized protocol run by governance, with
          representative councils elected by the community, ensuring every
          decision reflects the collective voice of its users.
        </Text>
        <Link href="https://liquidity.synthetix.eth.limo/">
          <Button
            gap="8px"
            p="10px 16px"
            borderRadius="4px"
            width="fit-content"
            fontWeight="bold"
            size={{ base: 'lg', md: 'md' }}
          >
            Vote for Governance
          </Button>
        </Link>
      </Box>

      {/* Png for smaller devices, Svg for larger */}
      <Show above="md">
        <Spartan
          top={{ base: '0px', md: '64px', lg: '64px', '2xl': '100px' }}
          left={{ base: '0px', md: '0px', lg: '355', '2xl': '500px' }}
          position="absolute"
          zIndex={0}
          width={{ base: '250%', sm: '200%', md: '175%', lg: 'unset' }}
        />
      </Show>
      <Show below="md">
        <Image
          src="/Spartan.png"
          alt="Spartan"
          top={{ base: '125px', md: '50px' }}
          left={{ base: '-20%', sm: '300px' }}
          position="absolute"
          zIndex={0}
          minWidth={{ base: '700px' }}
          width="250%"
        />
      </Show>
    </Box>
  );
}
