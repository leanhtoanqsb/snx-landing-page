import fetchIntegratorsData from '@/api/integrator';
import { IntegratorsVolumeData } from '@/components/types';
import { FetchQueryOptions } from '@tanstack/react-query';

export function getIntegratorDataOption(): FetchQueryOptions<{
  integratorsVolume: IntegratorsVolumeData[];
}> {
  return {
    queryKey: ['integrators-data'],
    queryFn: fetchIntegratorsData,
  };
}
