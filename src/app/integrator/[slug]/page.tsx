'use client';

import { getQueryClient } from '@/app/getQueryClient';
import Spacer from '@/components/@ui/Spacer';
import PageLayout from '@/components/PageLayout';
import { getIntegratorDataOption } from '@/queries/integrators';
import Charts from '@/sections/integrator/Charts';
import Description from '@/sections/integrator/Description';
import IntegratorHero from '@/sections/integrator/IntegratorHero';
import IntegratorNews from '@/sections/integrator/IntegratorNews';
import { ArrowLeftIcon } from '@/svg/ArrowLeftIcon';
import { IntegratorItem, integrators } from '@/utils/integrators';
import { Box, Flex, Text } from '@chakra-ui/react';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Page() {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(getIntegratorDataOption());

  const { slug: trackingCode } = useParams();
  const integrator =
    integrators.find(
      (_i) =>
        _i.tracking_code.toLowerCase() ===
        (trackingCode as string)?.toLowerCase?.()
    ) ?? ({} as IntegratorItem);
  if (!integrator) return <Box>Integrator not found</Box>;

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
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Charts />
      </HydrationBoundary>
      <Spacer gap={32} />
      <IntegratorNews />
      <Spacer gap={100} />
    </PageLayout>
  );
}
