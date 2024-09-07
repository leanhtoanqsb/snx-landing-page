import { getQueryClient } from '@/app/getQueryClient';
import { SectionHeading } from '@/components/@ui/Heading';
import { SectionParagraph } from '@/components/@ui/Paragraph';
import Dropdown, {
  CheckableDropdownItem,
  ClearSelectionItem,
} from '@/components/@widget/Dropdown';
import InputSearch from '@/components/@widget/InputSearch';
import { IntegratorCard } from '@/components/IntergratorCard';
import { getIntegratorDataOption } from '@/queries/integrators';
import { Image } from '@chakra-ui/react';
import { Box, Flex } from '@chakra-ui/react';
import {
  dehydrate,
  HydrationBoundary,
  useQueries,
  useQuery,
} from '@tanstack/react-query';
import { ReactNode, useState } from 'react';

type SelectOption = { label: ReactNode; value: string; icon?: string };
type State = {
  chain: string | null;
  category: string | null;
  product: string | null;
};

const CHAIN_OPTIONS: SelectOption[] = [
  { label: 'Mainet', value: 'mainet', icon: '/ETH.png' },
  { label: 'Base', value: 'base', icon: '/BASE.png' },
  { label: 'Optimistic', value: 'optimistic', icon: '/OPTIMISTIC.png' },
  { label: 'Arbitrum', value: 'arbitrum', icon: '/ARBITRUM.png' },
];
const CATEGORY_OPTIONS: SelectOption[] = [
  { label: 'Exchange', value: 'exchange' },
  { label: 'Strategies', value: 'strategies' },
  { label: 'Others', value: 'others' },
];
const PRODUCT_OPTIONS: SelectOption[] = [
  { label: 'Perpetual futures', value: 'perpetual_futures' },
  { label: 'Degen markets', value: 'degen_markets' },
  { label: 'Leveraged Tokens', value: 'leveraged_tokens' },
  { label: 'Trading & LP vaults', value: 'trading_n_lp_vaults' },
  { label: 'Others', value: 'others' },
];

export default function Category() {
  const [state, setState] = useState<State>({
    chain: null,
    category: null,
    product: null,
  });
  const onChangeChain = (chain: string) =>
    setState((prev) => ({ ...prev, chain }));
  const onChangeCategory = (category: string) =>
    setState((prev) => ({ ...prev, category }));
  const onChangeProduct = (product: string) =>
    setState((prev) => ({ ...prev, product }));
  const onClearSelection = (key: 'chain' | 'category' | 'product') => {
    setState((prev) => ({ ...prev, [key]: null }));
  };

  // Logic select multiple
  // const [state, setState] = useState<State>({
  //   chain: CHAIN_OPTIONS.map((o) => o.value),
  //   category: CATEGORY_OPTIONS.map((o) => o.value),
  //   product: PRODUCT_OPTIONS.map((o) => o.value),
  // });
  // const onChangeChain = (chain: string) =>
  //   setState((prev) => {
  //     if (prev.chain.includes(chain)) {
  //       return {
  //         ...prev,
  //         chain: prev.chain.filter((_chain) => _chain !== chain),
  //       };
  //     }
  //     return { ...prev, chain: [...prev.chain, chain] };
  //   });
  // const onChangeCategory = (category: string) =>
  //   setState((prev) => {
  //     if (prev.category.includes(category)) {
  //       return {
  //         ...prev,
  //         category: prev.category.filter((_category) => _category !== category),
  //       };
  //     }
  //     return { ...prev, category: [...prev.category, category] };
  //   });
  // const onChangeProduct = (product: string) =>
  //   setState((prev) => {
  //     if (prev.product.includes(product)) {
  //       return {
  //         ...prev,
  //         product: prev.product.filter((_product) => _product !== product),
  //       };
  //     }
  //     return { ...prev, product: [...prev.product, product] };
  //   });

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(getIntegratorDataOption());

  return (
    <Box width="100%" id="category" position="relative">
      <Box position="relative" zIndex={1}>
        <SectionHeading mb="16px">Browse By Category</SectionHeading>
        <SectionParagraph mb="24px" maxW="800px">
          Explore the growing ecosystem of decentralized apps built on top of
          Synthetix liquidity. The Synthetix ecosystem is comprised of
          derivatives exchanges, sUSD utility, and more
        </SectionParagraph>
        <Box>
          <Flex
            gap="24px"
            flexDirection={{ base: 'column', md: 'row' }}
            sx={{ '& > div': { flex: 1 } }}
          >
            <Dropdown
              menu={
                <>
                  <ClearSelectionItem onClick={() => onClearSelection('chain')}>
                    Clear Selection
                  </ClearSelectionItem>
                  {CHAIN_OPTIONS.map((option) => {
                    const isActive = state.chain === option.value;
                    return (
                      <CheckableDropdownItem
                        key={option.value}
                        isActive={isActive}
                        onClick={() => onChangeChain(option.value)}
                      >
                        <Flex sx={{ alignItems: 'center', gap: 2 }}>
                          <Image
                            width={'20px'}
                            height={'20px'}
                            src={option.icon ?? ''}
                            alt={option.value}
                            overflow="hidden"
                            flexShrink={0}
                          />
                          <Box>{option.label}</Box>
                        </Flex>
                      </CheckableDropdownItem>
                    );
                  })}
                </>
              }
            >
              {state.chain == null
                ? 'All Networks'
                : CHAIN_OPTIONS.find((option) => option.value === state.chain)
                    ?.label}
            </Dropdown>
            <Dropdown
              menu={
                <>
                  <ClearSelectionItem
                    onClick={() => onClearSelection('category')}
                  >
                    Clear Selection
                  </ClearSelectionItem>
                  {CATEGORY_OPTIONS.map((option) => {
                    const isActive = state.category === option.value;
                    return (
                      <CheckableDropdownItem
                        key={option.value}
                        isActive={isActive}
                        onClick={() => onChangeCategory(option.value)}
                      >
                        {option.label}
                      </CheckableDropdownItem>
                    );
                  })}
                </>
              }
            >
              {state.category == null
                ? 'All Categories'
                : CATEGORY_OPTIONS.find(
                    (option) => option.value === state.category
                  )?.label}
            </Dropdown>
            <Dropdown
              menu={
                <>
                  <ClearSelectionItem
                    onClick={() => onClearSelection('product')}
                  >
                    Clear Selection
                  </ClearSelectionItem>
                  {PRODUCT_OPTIONS.map((option) => {
                    const isActive = state.product === option.value;
                    return (
                      <CheckableDropdownItem
                        key={option.value}
                        isActive={isActive}
                        onClick={() => onChangeProduct(option.value)}
                      >
                        {option.label}
                      </CheckableDropdownItem>
                    );
                  })}
                </>
              }
            >
              {state.product == null
                ? 'All Products'
                : PRODUCT_OPTIONS.find(
                    (option) => option.value === state.product
                  )?.label}
            </Dropdown>
            <InputSearch />
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
