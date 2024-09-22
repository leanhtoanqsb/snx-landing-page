export type IntegratorsVolumeData = {
  date: string;
  chain: string;
  tracking_code: string;
  volume: number;
  volume_7dma: number;
  volume_30dma: number;
  fees: number;
  OI: number;
  dauu: number;
  tuu: number;
};

export interface IntegratorNewsData {
  title: string;
  link: string;
  author: string;
  contentSnippet: string;
  content: string;
}

// export type IntegratorsVolumeResponse = {
// 	result: {
// 		rows: IntegratorsVolumeData[];
// 	};
// };

export type StakedSNXResponse = {
  systemStakingPercent: number;
  timestamp: number;
  stakedSnx: {
    ethereum: number;
    optimism: number;
  };
};

export type VolumeData = {
  cumulative_fees: number;
  cumulative_volume: number;
  days30_fee: number;
  days30_total_fee: number;
  days30_vol: number;
  days7_fee: number;
  days7_total_fee: number;
  days7_vol: number;
  time: string;
  total_fees: number;
  total_volume: number;
};

export type VolumeResponse = {
  result: {
    rows: VolumeData[];
  };
};

export type ActiveStakersData = {
  All_stakers: number;
  L1_stakers: number;
  L2_stakers: number;
  time: string;
};

export type ActiveStakerResponse = {
  result: {
    rows: ActiveStakersData[];
  };
};

export type OpenInterestData = {
  _col2: string;
  day: string;
  size: number;
  size_usd: number;
};

export type OpenInterestResponse = {
  result: {
    rows: OpenInterestData[];
  };
};

export type TradingFeesData = {
  _30_day_L1: number;
  _30_day_L2: number;
  _30_day_combined: number;
  _30_day_cumulative: number;
  _7_day_L1: number;
  _7_day_L2: number;
  _7_day_combined: number;
  _7_day_cumulative: number;
  combined: number;
  day: string;
  l1fee: number;
  l2fee: number;
};

export type TradingFeesResponse = {
  result: {
    rows: TradingFeesData[];
  };
};

export type SwapsData = {
  currency_key: string;
  time: string;
  volume: number;
  volume_native: number;
};

export type SwapsResponse = {
  result: {
    rows: SwapsData[];
  };
};

export type GraphqlResponse = {
  data: {
    futuresMarkets: {
      id: string;
      isActive: boolean;
      marketKey: string;
    }[];
    dailyStats: {
      cumulativeTraders: number;
    }[];
  };
};

export type PnLVolumeResponse = {
  execution_id: string;
  query_id: number;
  state: string;
  submitted_at: string;
  expires_at: string;
  execution_started_at: string;
  execution_ended_at: string;
  result: {
    rows: PnLVolumeRow[];
  };
};

export type PnLVolumeRow = {
  daily_fee: number;
  daily_pnl: number;
  day: string;
  loss: number;
  net_to_stakers: number;
  profit: number;
  total_fees: number;
  total_pnl: number;
};

export type InterestVolumeResponse = {
  execution_id: string;
  query_id: number;
  state: string;
  submitted_at: string;
  expires_at: string;
  execution_started_at: string;
  execution_ended_at: string;
  result: {
    rows: InterestVolumeRow[];
  };
};

export type InterestVolumeRow = {
  day: string;
  long: number;
  short: number;
};
