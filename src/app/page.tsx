// app/page.tsx
'use client';
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
      <IntegratorStats />
      <Category />
      <Partners />
      <News />
    </PageLayout>
  );
}
