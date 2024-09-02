import { SectionParagraph } from '@/components/@ui/Paragraph';
import { Box, Flex, Image, Text } from '@chakra-ui/react';

export default function Partners() {
  return (
    <Box width="100%">
      <SectionParagraph mb="24px">INFRASTRUCTURE PARTNERS</SectionParagraph>
      <Flex
        w="100%"
        sx={{
          alignItems: 'center',
          flexWrap: 'wrap',
          rowGap: '0px',
          columnGap: '32px',
          '& > img': {
            height: '54px',
            transition: '0.3s',
            _hover: { transform: 'scale(1.1)' },
          },
        }}
      >
        <Image alt="blocknative" src="/blocknative.svg" />
        <Image alt="cannon" src="/cannon.svg" />
        <Image alt="chainlink" src="/chainlinkText.svg" />
        <Image alt="infura" src="/infura.svg" />
        <Image alt="iosiro" src="/iosiro.svg" />
        <Image alt="macro" src="/macro.svg" />
        <Image alt="optimism" src="/optimism.svg" />
        <Image alt="pyth" src="/pythText.svg" />
      </Flex>
    </Box>
  );
}
