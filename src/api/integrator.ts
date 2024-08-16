import { IntegratorsVolumeResponse } from '@/components/types';
import axios from 'axios';

const INTEGRATORS_VOLUME_URL =
  'https://api.dune.com/api/v1/query/2647536/results';

const apiKey = process?.env?.NEXT_PUBLIC_DUNE_API_KEY || '';

export default async function fetchIntegratorsData() {
  try {
    const { data } = await axios.get<IntegratorsVolumeResponse>(
      INTEGRATORS_VOLUME_URL,
      {
        headers: { 'x-dune-api-key': apiKey },
      }
    );

    const integratorsVolume = data.result.rows.sort((a, b) =>
      b.day > a.day ? 1 : -1
    );

    // Get the integrator volume for the latest date
    // and sort by daily fee

    return {
      integratorsVolume,
    };
  } catch (error) {
    console.log('Error fetching dune data', error);
    return {
      integratorsVolume: null,
    };
  }
}
