import axios from 'axios';

const MINT_BURN_URL = 'https://api.dune.com/api/v1/query/3059967/results';

const apiKey = process?.env?.NEXT_PUBLIC_DUNE_API_KEY || '';

interface MintBurnResponse {
  result: {
    rows: MintBurn[];
  };
}

interface MintBurn {
  day: string;
  eth_burns: number;
  eth_mints: number;
  eth_snxUSD_supply: number;
  op_burns: number;
  op_mints: number;
  op_snxUSD_supply: number;
  token: string;
}

export default async function fetchDuneData() {
  try {
    const { data } = await axios.get<MintBurnResponse>(MINT_BURN_URL, {
      headers: { 'x-dune-api-key': apiKey },
    });

    return {
      mintburn: data.result.rows,
    };
  } catch (error) {
    console.log('Error fetching dune data', error);
    return {
      result: null,
    };
  }
}
