import { SectionHeading } from '@/components/@ui/Heading';
import { SectionParagraph } from '@/components/@ui/Paragraph';
import { IntegratorItem } from '@/utils/integrators';
import { Box } from '@chakra-ui/react';

export default function Description({ data }: { data: IntegratorItem }) {
  return (
    <Box width="100%" position="relative" maxW="800px" zIndex={2}>
      <SectionHeading mb="16px">{data.name} STATS</SectionHeading>

      <SectionParagraph>
        Explore the growing ecosystem of decentralized apps built on top of
        Synthetix liquidity. The Synthetix ecosystem is comprised of derivatives
        exchanges, sUSD utility, and more
      </SectionParagraph>
    </Box>
  );
}
