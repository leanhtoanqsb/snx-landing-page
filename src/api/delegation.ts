const DELEGATION_URL = 'https://api.dune.com/api/v1/query/3060540/results';
import axios from 'axios';

const apiKey = process?.env?.NEXT_PUBLIC_DUNE_API_KEY || '';

interface DelegationResponse {
  result: {
    rows: Delegation[];
  };
}

interface Delegation {
  ID: string;
  blockchain: string;
  cumDelegation: number;
  currentName: string;
  daily_delegations: number;
  daily_delegations_USD: number;
  day: string;
  poolId: string;
  token: string;
  tokenPrice: number;
}

export default async function fetchDuneData() {
  try {
    const { data } = await axios.get<DelegationResponse>(DELEGATION_URL, {
      headers: { 'x-dune-api-key': apiKey },
    });

    return {
      delegation: data.result.rows,
    };
  } catch (error) {
    console.log('Error fetching dune data', error);
    return {
      result: null,
    };
  }
}
