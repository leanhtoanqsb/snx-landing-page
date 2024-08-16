import axios from 'axios';

const TVL_BY_LAYER_URL = 'https://api.dune.com/api/v1/query/3060865/results';
const TVL_PROTOCOLS_URL = 'https://api.dune.com/api/v1/query/3051552/results';

const apiKey = process?.env?.NEXT_PUBLIC_DUNE_API_KEY || '';

interface TVLLayerResponse {
  result: {
    rows: TVLByLayer[];
  };
}

interface TVLProtocolResponse {
  result: {
    rows: TVLProtocol[];
  };
}

interface TVLByLayer {
  day: string;
  eth_SNX: number;
  op_SNX: number;
}

interface TVLProtocol {
  bal: number;
  bal_usd: number;
  blockchain: string;
  day: string;
  layer_usd: number;
  token: string;
  total_token: number;
  total_token_usd: number;
  total_usd: number;
}

export default async function fetchDuneData() {
  try {
    const [{ data: tvlByLayer }, { data: tvlByProtocol }] = await Promise.all([
      axios.get<TVLLayerResponse>(TVL_BY_LAYER_URL, {
        headers: { 'x-dune-api-key': apiKey },
      }),
      axios.get<TVLProtocolResponse>(TVL_PROTOCOLS_URL, {
        headers: { 'x-dune-api-key': apiKey },
      }),
    ]);

    return {
      tvlByLayer: tvlByLayer?.result.rows,
      tvlByProtocol: tvlByProtocol?.result.rows,
    };
  } catch (error) {
    console.log('Error fetching dune data', error);
    return {
      result: null,
    };
  }
}
