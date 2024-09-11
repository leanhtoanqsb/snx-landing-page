import { SectionHeading } from '@/components/@ui/Heading';
import { SectionParagraph } from '@/components/@ui/Paragraph';
import { NewsCard } from '@/components/NewsCard';
import { Box, Text, Heading } from '@chakra-ui/react';

export default function News() {
  return (
    <Box width="100%" id="news" position="relative">
      <Box position="relative" zIndex={1}>
        <Box maxW="800px">
          <SectionHeading mb="16px">Latest News</SectionHeading>
          <SectionParagraph mb="24px">
            Multiple front ends have chosen to integrate Synthetix&apos;s
            composable and permissionless smart contracts
          </SectionParagraph>
        </Box>
        <Box
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
    </Box>
  );
}

const mockData = [
  {
    title: 'Blog Post',
    description:
      'Polynomial is a DeFi derivatives powerhouse that offers derivatives-based products built on top of Synthetix such as perps. Polynomial is a DeFi derivatives powerhouse that offers derivatives-based products built on top of Synthetix such as perps, power...',
    imageUri: 'fake-new-1.png',
    link: '',
  },
  {
    title: 'Blog Post',
    description:
      'Polynomial is a DeFi derivatives powerhouse that offers derivatives-based products built on top of Synthetix such as perps. Polynomial is a DeFi derivatives powerhouse that offers derivatives-based products built on top of Synthetix such as perps, power...',
    imageUri: 'fake-new-2.png',
    link: '',
  },
  {
    title: 'Blog Post',
    description:
      'Polynomial is a DeFi derivatives powerhouse that offers derivatives-based products built on top of Synthetix such as perps. Polynomial is a DeFi derivatives powerhouse that offers derivatives-based products built on top of Synthetix such as perps, power...',
    imageUri: 'fake-new-3.png',
    link: '',
  },
];
