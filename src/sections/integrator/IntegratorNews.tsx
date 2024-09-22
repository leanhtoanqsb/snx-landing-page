import { SectionHeading } from '@/components/@ui/Heading';
import { SectionParagraph } from '@/components/@ui/Paragraph';
import { NewsCard } from '@/components/NewsCard';
import { IntegratorNewsData } from '@/components/types';
import { Box } from '@chakra-ui/react';
import Parser from 'rss-parser';
const parser = new Parser();

export default function IntegratorNews({
  data,
}: {
  data?: IntegratorNewsData[];
}) {
  return (
    <Box width="100%" position="relative">
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
          {data?.map((data, index) => {
            const imageUri = data.content?.match(/<img src="(.*?)"/)?.[1];
            return (
              <NewsCard
                key={index}
                imageUri={imageUri}
                title={data.title}
                description={data.contentSnippet}
                link={data.link}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
