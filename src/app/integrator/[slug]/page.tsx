import { fetchIntegratorNews } from '@/api/integrator';
import Spacer from '@/components/@ui/Spacer';
import PageLayout from '@/components/PageLayout';
import Charts from '@/sections/integrator/Charts';
import Description from '@/sections/integrator/Description';
import IntegratorHero from '@/sections/integrator/IntegratorHero';
import IntegratorNews from '@/sections/integrator/IntegratorNews';
import { ArrowLeftIcon } from '@/svg/ArrowLeftIcon';
import { IntegratorItem, integrators } from '@/utils/integrators';
import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

export default async function Page({
  params: { slug: trackingCode },
}: {
  params: { slug: string };
}) {
  const integrator =
    integrators.find(
      (_i) =>
        _i.tracking_code.toLowerCase() ===
        (trackingCode as string)?.toLowerCase?.()
    ) ?? ({} as IntegratorItem);

  if (!integrator) return null;

  const { data: news } = await fetchIntegratorNews(integrator.tracking_code);
  return (
    <PageLayout>
      <Flex
        as={Link}
        href="/"
        mt="65px"
        mb="24px"
        sx={{ alignItems: 'center', gap: '8px', color: 'cyan.500' }}
      >
        <ArrowLeftIcon />{' '}
        <Text sx={{ fontSize: '14px', fontWeight: 'bold', lineHeight: '20px' }}>
          Back
        </Text>
      </Flex>
      <IntegratorHero data={integrator} />
      <Spacer gap={{ base: '40px', md: '32px' }} />
      <Description data={integrator} />
      <Spacer gap={32} />
      <Charts />
      <Spacer gap={32} />
      <IntegratorNews data={news} />;
      <Spacer gap={100} />
    </PageLayout>
  );
}
