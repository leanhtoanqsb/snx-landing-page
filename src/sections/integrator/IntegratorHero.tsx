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
  Card,
} from '@chakra-ui/react';

export default function IntegratorHero() {
  return (
    <Box pb="150px" width="100%" id="hero">
      <Flex
        width="100%"
        sx={{ justifyContent: 'space-between' }}
        position="relative"
        zIndex={2}
      >
        <Box pt="260px" width={{ base: '100%', lg: '525px', '2xl': '600px' }}>
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
        <Show above="lg">
          <Box pt="205px">
            <Note />
            <Box mb="40px" />
            <Note />
          </Box>
        </Show>
      </Flex>

      {/* Png for smaller devices, Svg for larger */}
      <Show above="md">
        <Box left={0} right={0} top={160} position="absolute">
          <Image
            position="relative"
            zIndex={0}
            src="/Wave.svg"
            alt="Spartan"
            minWidth={{ base: '700px' }}
            width="100%"
            height="520px"
          />
          <Box
            position="absolute"
            zIndex={1}
            top={-10}
            left={-100}
            right={-100}
            bottom={-10}
            backgroundImage="radial-gradient(rgba(0, 0, 0, 0) 0%, navy.900 60%, navy.900 100%)"
            backgroundSize="100%"
            filter="blur(20px)"
          />
          {/* <Box
            position="absolute"
            zIndex={1}
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="navy.900"
            filter="blur(500px)"
          /> */}
          <Box
            position="absolute"
            zIndex={1}
            top={0}
            left={0}
            right="50%"
            bottom={0}
            bg="navy.900"
            filter="blur(300px)"
          />
        </Box>
      </Show>
      <Show below="md">
        <Image
          src="/Wave.png"
          alt="Wave"
          top={260}
          left={0}
          position="absolute"
          zIndex={0}
          minWidth={{ base: '700px' }}
          width="250%"
        />
      </Show>
    </Box>
  );
}

function Note() {
  return (
    <Card variant="filled" width="465px">
      <Flex
        mb="4px"
        sx={{
          height: 'max-content',
          widht: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Flex>
          <Image src="" width="24px" height="24px" alt="ic" />
          <Text color="gray.500" fontSize="12px" lineHeight="20px">
            Optimictis
          </Text>
        </Flex>
        <Text
          color="gray.50"
          fontSize="16px"
          lineHeight="24px"
          fontWeight="bold"
        >
          500 SNAX
        </Text>
      </Flex>
      <Flex alignItems="end" gap="24px">
        <Box>
          <Text
            fontSize="16px"
            lineHeight="24px"
            color="gray.50"
            fontWeight="bold"
          >
            Traded on Perps V2 before
          </Text>
          <Text fontSize="14px" lineHeight="20px" color="gray.500">
            Trade on any frontend platform build on top of Synthetix Perps V2
          </Text>
        </Box>
        <Button
          size="sm"
          sx={{ bg: '#C4C4C4', px: '4px', py: '8px', flexShrink: 0 }}
        >
          Trade on Kwenta
        </Button>
      </Flex>
    </Card>
  );
}
