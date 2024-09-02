// app/page.tsx
'use client';
import Spacer from '@/components/@ui/Spacer';
import PageLayout from '@/components/PageLayout';
import Category from '@/sections/home/Category';
import HomeHero from '@/sections/home/HomeHero';
import IntegratorStats from '@/sections/home/IntegratorStats';
import News from '@/sections/home/News';
import Partners from '@/sections/home/Partners';

export default function Page() {
  return (
    <PageLayout>
      <HomeHero />
      <Spacer gap={36} />
      <IntegratorStats />
      <Spacer gap={36} />
      <Category />
      <Spacer gap={36} />
      <Partners />
      <Spacer gap={36} />
      <News />
      <Spacer gap={100} />
    </PageLayout>
  );
}
