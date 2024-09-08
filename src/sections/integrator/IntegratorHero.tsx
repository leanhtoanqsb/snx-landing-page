import { SectionHeading } from '@/components/@ui/Heading';
import { SectionParagraph } from '@/components/@ui/Paragraph';
import { Link } from '@chakra-ui/next-js';

import Discord from '@/svg/Discord';
import Twitter from '@/svg/Twitter';
import Github from '@/svg/Github';

import { Box, Button, Flex, Show, Text, Image, Card } from '@chakra-ui/react';
import ExternalLinkButton from '@/components/@ui/ExternalLinkButton';

export default function IntegratorHero() {
  return (
    <Box width="100%">
      <Flex
        width="100%"
        alignItems={{ base: 'start', md: 'center' }}
        flexDirection={{ base: 'column', md: 'row' }}
        gap="40px"
        sx={{ justifyContent: 'space-between' }}
        position="relative"
        zIndex={2}
      >
        <Box width={{ base: '100%', lg: '525px', '2xl': '600px' }}>
          <SectionHeading mb="16px">Kwenta.io</SectionHeading>
          <SectionParagraph mb="24px">
            Synthetix is a decentralized protocol run by governance, with
            representative councils elected by the community, ensuring every
            decision reflects the collective voice of its users.
          </SectionParagraph>
          <Socials />
          <Box mb="24px" />
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
        <Box>
          <Note />
        </Box>
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
    <Card variant="filled" width="588px">
      <Text
        mb="32px"
        sx={{
          color: 'gray.50',
          fontSize: '20px',
          lineHeight: '28px',
          fontWeight: 'bold',
        }}
      >
        Rewards on Kwenta
      </Text>
      <Flex sx={{ width: '100%', flexDirection: 'column', gap: '32px' }}>
        {events.map((event) => {
          return (
            <Flex width="100%" sx={{ gap: 3, justifyContent: 'space-between' }}>
              <Box flex={1}>
                <Text
                  mb="12px"
                  sx={{ fontSize: '16px', lineHeight: '24px', color: 'white' }}
                >
                  {event.title}
                </Text>
                <Text
                  sx={{
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: 'gray.500',
                  }}
                >
                  {event.description}
                </Text>
              </Box>
              <Box flexShrink={0}>
                <Flex mb="12px" sx={{ alignItems: 'center', gap: 2 }}>
                  <Image
                    width={'20px'}
                    height={'20px'}
                    src={`/${event.chain}.png`}
                    alt={event.chain}
                    overflow="hidden"
                    flexShrink={0}
                  />
                  <Box>{event.chain}</Box>
                </Flex>
                <ExternalLinkButton link={event.link}>
                  More Info
                </ExternalLinkButton>
              </Box>
            </Flex>
          );
        })}
      </Flex>
    </Card>
  );
}

const events = [
  {
    title: 'Kwenta Staking Rewards',
    description: 'Rewards description goes here',
    chain: 'OPTIMISTIC',
    link: '/',
  },
  {
    title: 'SNX Fee Rebate',
    description: 'Rewards description goes here',
    chain: 'BASE',
    link: '/',
  },
];

const socialLinks = [
  {
    link: 'https://discord.com/invite/KVeCZe6ahW',
    label: 'discord',
    image: <Discord />,
  },
  {
    link: 'https://twitter.com/synthetix_io',
    label: 'twitter',
    image: <Twitter />,
  },
  {
    link: 'https://github.com/synthetixio',
    label: 'github',
    image: <Github />,
  },
];

function Socials() {
  return (
    <Flex as="ul" sx={{ alignItems: 'center', gap: '16px' }}>
      {socialLinks.map((s) => (
        <Link
          href={s.link}
          key={s.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {s.image}
        </Link>
      ))}
    </Flex>
  );
}
