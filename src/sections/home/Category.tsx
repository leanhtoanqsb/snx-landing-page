import { getQueryClient } from '@/app/getQueryClient';
import { IntegratorCard } from '@/components/IntergratorCard';
import { getIntegratorDataOption } from '@/queries/integrators';
import Spartan from '@/svg/Spartan';
import { Link } from '@chakra-ui/next-js';
import {
  Box,
  Button,
  Flex,
  Show,
  Text,
  Image,
  Heading,
  Select,
} from '@chakra-ui/react';
import {
  dehydrate,
  HydrationBoundary,
  useQueries,
  useQuery,
} from '@tanstack/react-query';
import { ChangeEventHandler, ReactNode, useState } from 'react';

type SelectOption = { label: ReactNode; value: string };
type State = { chain: string; category: string; product: string };

const CHAIN_OPTIONS: SelectOption[] = [
  { label: 'All Network', value: 'all' },
  { label: 'Mainet', value: 'mainet' },
  { label: 'Base', value: 'base' },
  { label: 'Optimistic', value: 'optimistic' },
  { label: 'Arbitrum', value: 'arbitrum' },
];
const CATEGORY_OPTIONS: SelectOption[] = [
  { label: 'All Categories', value: 'all' },
  { label: 'Exchange', value: 'exchange' },
  { label: 'Strategies', value: 'strategies' },
  { label: 'Others', value: 'others' },
];
const PRODUCT_OPTIONS: SelectOption[] = [
  { label: 'All Products', value: 'all' },
  { label: 'Perpetual futures', value: 'perpetual_futures' },
  { label: 'Degen markets', value: 'degen_markets' },
  { label: 'Leveraged Tokens', value: 'leveraged_tokens' },
  { label: 'Trading & LP vaults', value: 'trading_n_lp_vaults' },
  { label: 'Others', value: 'others' },
];

export default function Category() {
  const [state, setState] = useState<State>({
    chain: CHAIN_OPTIONS[0].value,
    category: CATEGORY_OPTIONS[0].value,
    product: PRODUCT_OPTIONS[0].value,
  });
  const onChangeChain: ChangeEventHandler<HTMLSelectElement> = (e) =>
    setState((prev) => ({ ...prev, chain: e.target.value }));
  const onChangeCategory: ChangeEventHandler<HTMLSelectElement> = (e) =>
    setState((prev) => ({ ...prev, category: e.target.value }));
  const onChangeProduct: ChangeEventHandler<HTMLSelectElement> = (e) =>
    setState((prev) => ({ ...prev, product: e.target.value }));

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(getIntegratorDataOption());

  return (
    <Box pt="100px" pb="200px" width="100%" id="category" position="relative">
      <Box position="relative" zIndex={1}>
        <Box maxW="800px">
          <Heading
            fontSize={{ base: '48px', md: '60px' }}
            as="h2"
            color="gray.50"
            mb="16px"
          >
            Browse By Category
          </Heading>
          <Text
            fontSize="16px"
            lineHeight="24px"
            color="gray.500"
            fontWeight={400}
          >
            Explore the growing ecosystem of decentralized apps built on top of
            Synthetix liquidity. The Synthetix ecosystem is comprised of
            derivatives exchanges, sUSD utility, and more
          </Text>
        </Box>
        <Box mt="124px">
          <Flex gap="12px">
            <Select
              value={state.chain}
              onChange={onChangeChain}
              width="max-content"
            >
              {CHAIN_OPTIONS.map((option) => {
                return (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                );
              })}
            </Select>
            <Select
              value="option1"
              onChange={onChangeCategory}
              width="max-content"
            >
              {CATEGORY_OPTIONS.map((option) => {
                return (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                );
              })}
            </Select>
            <Select
              value="option1"
              onChange={onChangeProduct}
              width="max-content"
            >
              {PRODUCT_OPTIONS.map((option) => {
                return (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                );
              })}
            </Select>
          </Flex>
        </Box>

        <Box
          mt="24px"
          display="grid"
          width="100%"
          gridTemplateColumns={{
            base: '1fr',
            md: '1fr 1fr',
            xl: 'repeat(4, 1fr)',
          }}
          gridTemplateRows="290px"
          gap="24px"
        >
          <HydrationBoundary state={dehydrate(queryClient)}>
            <ListCategory state={state} />
          </HydrationBoundary>
          {mockData.map((data, index) => {
            return <IntegratorCard key={index} {...data} />;
          })}
        </Box>
      </Box>
      <Box
        position="absolute"
        // backgroundImage="linear-gradient(44deg, #34EDB3 0%, #00D1FF 100%)"
        backgroundColor="cyan.600"
        width="618px"
        height="694px"
        left="-492px"
        top="-138px"
        borderRadius="100%"
        filter="blur(250px)"
      />
    </Box>
  );
}

function ListCategory({ state }: { state: State }) {
  const { data } = useQuery({
    ...getIntegratorDataOption(),
    select(data) {
      return data.integratorsVolume
        ?.filter((_data) => !!_data.tracking_code.match(/Kwenta/i))
        .slice(0, 30);
    },
  });

  return (
    <>
      {mockData.map((data, index) => {
        return <IntegratorCard key={index} {...data} />;
      })}
    </>
  );
}

const mockData = [
  {
    name: 'Kwenta',
    description:
      'Trade crypto, forex, and commodities with up to 50x leverage and deep liquidity. Trade crypto, forex, and commodities with up to 50x leverage and deep liquidity. Trade crypto, forex, and commodities with up to 50x leverage and deep liquidity.',
    imageUri: '',
    link: '/integrator/kwenta',
    tag: 'perp',
  },
  {
    name: 'Kwenta',
    description:
      'Trade crypto, forex, and commodities with up to 50x leverage and deep liquidity.',
    imageUri: '',
    link: '/integrator/kwenta',
    tag: 'perp',
  },
  {
    name: 'Kwenta',
    description:
      'Trade crypto, forex, and commodities with up to 50x leverage and deep liquidity.',
    imageUri: '',
    link: '/integrator/kwenta',
    tag: 'perp',
  },
  {
    name: 'Kwenta',
    description:
      'Trade crypto, forex, and commodities with up to 50x leverage and deep liquidity. Trade crypto, forex, and commodities with up to 50x leverage and deep liquidity.',
    imageUri: '',
    link: '/integrator/kwenta',
    tag: 'perp',
  },
  {
    name: 'Kwenta',
    description:
      'Trade crypto, forex, and commodities with up to 50x leverage and deep liquidity.',
    imageUri: '',
    link: '/integrator/kwenta',
    tag: 'perp',
  },
  {
    name: 'Kwenta',
    description:
      'Trade crypto, forex, and commodities with up to 50x leverage and deep liquidity.',
    imageUri: '',
    link: '/integrator/kwenta',
    tag: 'perp',
  },
  {
    name: 'Kwenta',
    description:
      'Trade crypto, forex, and commodities with up to 50x leverage and deep liquidity. Trade crypto, forex, and commodities with up to 50x leverage and deep liquidity.',
    imageUri: '',
    link: '/integrator/kwenta',
    tag: 'perp',
  },
  {
    name: 'Kwenta',
    description:
      'Trade crypto, forex, and commodities with up to 50x leverage and deep liquidity.',
    imageUri: '',
    link: '/integrator/kwenta',
    tag: 'perp',
  },
  {
    name: 'Kwenta',
    description:
      'Trade crypto, forex, and commodities with up to 50x leverage and deep liquidity.',
    imageUri: '',
    link: '/integrator/kwenta',
    tag: 'perp',
  },
  {
    name: 'Kwenta',
    description:
      'Trade crypto, forex, and commodities with up to 50x leverage and deep liquidity. Trade crypto, forex, and commodities with up to 50x leverage and deep liquidity.',
    imageUri: '',
    link: '/integrator/kwenta',
    tag: 'perp',
  },
  {
    name: 'Kwenta',
    description:
      'Trade crypto, forex, and commodities with up to 50x leverage and deep liquidity.',
    imageUri: '',
    link: '/integrator/kwenta',
    tag: 'perp',
  },
  {
    name: 'Kwenta',
    description:
      'Trade crypto, forex, and commodities with up to 50x leverage and deep liquidity.',
    imageUri: '',
    link: '/integrator/kwenta',
    tag: 'perp',
  },
];
