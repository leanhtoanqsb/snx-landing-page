import { PnLVolumeResponse } from '@/components/types';
import axios from 'axios';

const PNL_VOLUME_URL = 'https://api.dune.com/api/v1/query/2429954/results';

const apiKey = process?.env?.NEXT_PUBLIC_DUNE_API_KEY || '';

export default async function fetchDuneData() {
  try {
    const { data } = await axios.get<PnLVolumeResponse>(PNL_VOLUME_URL, {
      headers: { 'x-dune-api-key': apiKey },
    });

    return data;
  } catch (error) {
    console.log('Error fetching dune data', error);
    return {
      result: null,
    };
  }
}
