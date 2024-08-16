'use client';

import PageLayout from '@/components/PageLayout';
import Charts from '@/sections/integrator/Charts';
import Description from '@/sections/integrator/Description';
import IntegratorHero from '@/sections/integrator/IntegratorHero';

export default function Page() {
  return (
    <PageLayout>
      <IntegratorHero />
      <Description />
      <Charts />
    </PageLayout>
  );
}
