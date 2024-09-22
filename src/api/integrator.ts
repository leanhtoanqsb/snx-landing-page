import { IntegratorNewsData, IntegratorsVolumeData } from '@/components/types';
import axios from 'axios';
import dayjs from 'dayjs';
import { INTEGRATOR_MAPPING } from '@/utils/integrators';
import Parser from 'rss-parser';
const parser = new Parser();

const INTEGRATORS_VOLUME_URL = 'https://dummyjson.com/c/cb60-184a-4d70-bc63';

export default async function fetchIntegratorsData() {
  try {
    const { data } = await axios.get<IntegratorsVolumeData[]>(
      INTEGRATORS_VOLUME_URL
    );
    const integratorsVolume = data.sort(
      (a, b) => dayjs(b.date).utc().valueOf() - dayjs(a.date).utc().valueOf()
    );

    // Get the integrator volume for the latest date
    // and sort by daily fee

    return {
      integratorsVolume,
    };
  } catch (error) {
    console.log('Error fetching dune data', error);
    return {
      integratorsVolume: [] as unknown as IntegratorsVolumeData[],
    };
  }
}

export async function fetchIntegratorNews(trackingCode: string) {
  try {
    const { data } = await axios.get<any>(
      INTEGRATOR_MAPPING[trackingCode].newsLink,
      {
        headers: {
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Origin': 'http://localhost:3000', // replace this your actual origin
          'Access-Control-Allow-Methods': 'GET,DELETE,PATCH,POST,PUT',
          'Access-Control-Allow-Headers':
            'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
        },
      }
    );
    const parsedData = await parser.parseString(data);

    return { data: parsedData.items.slice(0, 3) as IntegratorNewsData[] };
  } catch (error) {
    console.log('Error fetching dune data', error);
    return { data: undefined };
  }
}

// const INTEGRATORS_VOLUME_URL =
//   'https://api.dune.com/api/v1/query/2647536/results';

// const apiKey = process?.env?.NEXT_PUBLIC_DUNE_API_KEY || '';

// export default async function fetchIntegratorsData() {
//   try {
//     const { data } = await axios.get<IntegratorsVolumeResponse>(
//       INTEGRATORS_VOLUME_URL,
//       {
//         headers: { 'x-dune-api-key': apiKey },
//       }
//     );

//     const integratorsVolume = data.result.rows.sort((a, b) =>
//       b.day > a.day ? 1 : -1
//     );

//     // Get the integrator volume for the latest date
//     // and sort by daily fee

//     return {
//       integratorsVolume,
//     };
//   } catch (error) {
//     console.log('Error fetching dune data', error);
//     return {
//       integratorsVolume: [] as unknown as IntegratorsVolumeData[],
//     };
//   }
// }
