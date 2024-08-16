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

export default function IntegratorHero() {
  return (
    <Box pt="260px" pb="66px" width="100%" id="hero" position="relative">
      <Box
        position="relative"
        zIndex={1}
        width={{ base: '100%', lg: '525px', '2xl': '600px' }}
      >
        <Heading
          fontSize={{ base: '48px', md: '60px' }}
          lineHeight={{ base: '60px', md: '72px' }}
          as="h2"
          color="gray.50"
          mb="16px"
        >
          Kwenta.io
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
            Trade on Kwenta
          </Button>
        </Link>
      </Box>

      {/* Png for smaller devices, Svg for larger */}
      <Show above="md">
        <Image
          src="/Wave.svg"
          alt="Spartan"
          top={{ base: '125px', md: '50px' }}
          left={{ base: '-20%', sm: '300px' }}
          position="absolute"
          zIndex={0}
          minWidth={{ base: '700px' }}
          width="100%"
        />
      </Show>
      <Show below="md">
        <Image
          src="/Wave.png"
          alt="Wave"
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
