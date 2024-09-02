import { HeroHeading } from '@/components/@ui/Heading';
import { SectionParagraph } from '@/components/@ui/Paragraph';
import { Box, Image } from '@chakra-ui/react';

export default function HomeHero() {
  return (
    <Box pt="97px" width="100%" id="hero" position="relative">
      <Box
        position="relative"
        zIndex={1}
        width={{ base: '100%', lg: '625px', '2xl': '656px' }}
      >
        <HeroHeading mb="16px">
          Integrators Lorem Ipsum Dolor Sit Amet Consectetur
        </HeroHeading>
        <SectionParagraph>
          Synthetix provides liquidity for permissionless derivatives like
          perpetual futures, options, parimutuel markets, and more across EVM
          chains. futures, options, parimutuel markets, and more across EVM
          chains.
        </SectionParagraph>
      </Box>

      <Box
        position="absolute"
        bg="cyan.500"
        width="618px"
        height="694px"
        right="-345px"
        top="-365px"
        opacity={0.44}
        borderRadius="100%"
        filter="blur(250px)"
        zIndex={0}
      />
      <Image
        src="/home-hero-image.png"
        alt="Spartan"
        width={{ base: '636px' }}
        height={{ base: '612px' }}
        top={{ base: '-65px' }}
        right={{ base: '-45px' }}
        position="absolute"
        zIndex={0}
      />
    </Box>
  );
}
