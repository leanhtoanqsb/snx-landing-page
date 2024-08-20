'use client';

import { getQueryClient } from '@/app/getQueryClient';
import PageLayout from '@/components/PageLayout';
import { getIntegratorDataOption } from '@/queries/integrators';
import Charts from '@/sections/integrator/Charts';
import Description from '@/sections/integrator/Description';
import IntegratorHero from '@/sections/integrator/IntegratorHero';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

export default function Page() {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(getIntegratorDataOption());

  return (
    <PageLayout>
      <IntegratorHero />
      <Description />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Charts />
      </HydrationBoundary>
    </PageLayout>
  );
}
