import fetchIntegratorsData, { fetchIntegratorNews } from '@/api/integrator';
import { IntegratorsVolumeData } from '@/components/types';
import { FetchQueryOptions } from '@tanstack/react-query';

export function getIntegratorDataOption(): FetchQueryOptions<{
  integratorsVolume: IntegratorsVolumeData[];
}> {
  return {
    queryKey: ['integrators-volume-data'],
    queryFn: fetchIntegratorsData,
  };
}

export function getIntegratorNews(trackingCode: string): FetchQueryOptions<{
  data: any;
}> {
  return {
    queryKey: ['integrator-news-data', trackingCode],
    queryFn: () => fetchIntegratorNews(trackingCode),
  };
}
