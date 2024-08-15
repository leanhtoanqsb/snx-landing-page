// app/page.tsx
'use client';
import PageLayout from '@/components/PageLayout';
import Category from '@/sections/home/Category';
import HomeHero from '@/sections/home/HomeHero';
import IntegratorStats from '@/sections/home/IntegratorStats';

export default function Page() {
  return (
    <PageLayout>
      <HomeHero />
      <IntegratorStats />
      <Category />
    </PageLayout>
  );
}
