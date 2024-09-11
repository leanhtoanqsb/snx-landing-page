export interface IntegratorItem {
  uri: string;
  name: string;
  description: string;
  link: string;
  tag:
    | 'PERPS'
    | 'ASST MGMT'
    | 'OPTIONS'
    | 'PARIMUTUEL'
    | 'SPOT'
    | 'AMM'
    | 'ORACLE';
  height: string;
  width: string;
  tracking_code: string;
}

export const INTEGRATOR_MAPPING: { [tracking_code: string]: IntegratorItem } = {
  KWENTA: {
    tracking_code: 'KWENTA',
    uri: '/kwenta.svg',
    name: 'Kwenta',
    description:
      'Trade crypto, forex, and commodities with up to 50x leverage and deep liquidity.',
    link: 'https://kwenta.eth.limo/dashboard/markets/',
    tag: 'PERPS',
    height: '30px',
    width: '30px',
  },
  CyberDEX: {
    tracking_code: 'CyberDEX',
    uri: '/cyberdex.svg',
    name: 'CyberDEX',
    description:
      'Trade perpetual futures for over 30 markets powered by Synthetix Perps.',
    link: 'https://www.cyberdex.xyz/',
    tag: 'PERPS',
    height: '30px',
    width: '30px',
  },
  infinex: {
    tracking_code: 'infinex',
    uri: '/cyberdex.svg',
    name: 'Infinex',
    description:
      'Your Infinex Account is the easiest way to access the world of DeFi with robust multi-chain support, and unrivalled, non-custodial security.',
    link: 'https://infinex.xyz/',
    tag: 'PERPS',
    height: '30px',
    width: '30px',
  },
  rageTrade: {
    tracking_code: 'rageTrade',
    uri: '/ragetrade.svg',
    name: 'Rage Trade',
    description: 'Best Prices, Aggregated Liquidity, Multi-Chain',
    link: 'https://rage.trade',
    tag: 'PERPS',
    height: '30px',
    width: '30px',
  },
  toros: {
    tracking_code: '',
    uri: '/toros.svg',
    name: 'Toros',
    description:
      'Toros enables a suite of one-click financial tools that simplify complex strategies.',
    link: 'https://toros.finance/',
    tag: 'ASST MGMT',
    height: '30px',
    width: '30px',
  },
  tlx: {
    tracking_code: 'tlx',
    uri: '/tlx.svg',
    name: 'TLX',
    description:
      'Trade leveraged tokens, no need to manage your position. Powered by Synthetix Perps.',
    link: 'https://tlx.fi/',
    tag: 'PERPS',
    height: '30px',
    width: '30px',
  },
  thales: {
    tracking_code: '',
    uri: '/thales.svg',
    name: 'Thales',
    description:
      'Use your sUSD to take positions on parimutuel crypto markets.',
    link: 'https://thalesmarket.io/',
    tag: 'PARIMUTUEL',
    height: '30px',
    width: '30px',
  },
  polynomial: {
    tracking_code: '',
    uri: '/polynomial.svg',
    name: 'Polynomial',
    description:
      "Trade perps with Polynomial's smart wallet to access up to 50x leverage.",
    link: 'https://trade.polynomial.fi/',
    tag: 'PERPS',
    height: '30px',
    width: '30px',
  },
  DHEDGE: {
    tracking_code: 'DHEDGE',
    uri: '/dhedge.svg',
    name: 'dHedge',
    description:
      'Use your sUSD to find permissionless investment managers and automated strategies.',
    link: 'https://app.dhedge.org/#',
    tag: 'ASST MGMT',
    height: '30px',
    width: '30px',
  },
  overtime: {
    tracking_code: '',
    uri: '/overtime.svg',
    name: 'Overtime Markets',
    description:
      "Use your sUSD to take positions on sporting events with Overtime's sports AMM.",
    link: 'https://overtimemarkets.xyz/',
    tag: 'AMM',
    height: '30px',
    width: '30px',
  },
};

export const integrators: IntegratorItem[] = [
  INTEGRATOR_MAPPING.KWENTA,
  INTEGRATOR_MAPPING.CyberDEX,
  INTEGRATOR_MAPPING.infinex,
  INTEGRATOR_MAPPING.polynomial,
  INTEGRATOR_MAPPING.tlx,
  INTEGRATOR_MAPPING.rageTrade,
];

const perpsIntegrators = [
  'Kwenta',
  'Polynomial',
  'Decentrex',
  'dHedge',
  'Lyra',
];

export const perpsPageIntegrators = integrators.filter((integrator) =>
  perpsIntegrators.includes(integrator.name)
);
