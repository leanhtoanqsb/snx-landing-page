import { getQueryClient } from '@/app/getQueryClient';
import { getIntegratorDataOption } from '@/queries/integrators';
import Spartan from '@/svg/Spartan';
import { formatNumber } from '@/utils/formatters/number';
import { Link } from '@chakra-ui/next-js';
import {
  Box,
  Heading,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react';
import { dehydrate, HydrationBoundary, useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { ReactNode } from 'react';

export default function IntegratorStats() {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(getIntegratorDataOption());
  return (
    <Box py="100px" width="100%" id="integrator-stats" position="relative">
      <Heading
        fontSize={{ base: '48px', md: '60px' }}
        maxW={{ md: '483px' }}
        as="h2"
        color="gray.50"
        mb="24px"
      >
        Integrator Stats
      </Heading>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <StatsTable />
      </HydrationBoundary>
    </Box>
  );
}

const INTEGRATOR_MAPPING: Record<string, { label: ReactNode }> = {
  CyberDEX: { label: 'CyberDex' },
  DHEDGE: { label: 'DHedge' },
  polynomial: { label: 'Polynomial' },
  KWENTA: { label: 'KWENTA' },
};
const OTHER_TRACKING_CODE = 'Other';

type FormatedIntegratorData = Record<
  string,
  {
    tvl: number;
    OI: number;
    dailyVolume: number;
    dailyFees: number;
    dailyDau: number;
  }
>;
function StatsTable() {
  const { data } = useQuery({
    ...getIntegratorDataOption(),
    select(data) {
      return data.integratorsVolume;
    },
  });
  const latestDate = data?.[0].date;
  const formatedData =
    data && latestDate
      ? data
          ?.filter(
            (integratorData) =>
              dayjs(latestDate).valueOf() >=
              dayjs(integratorData.date).valueOf()
          )
          ?.reduce?.<FormatedIntegratorData>((result, integratorData) => {
            const trackingCode = integratorData.tracking_code;
            const key = !!INTEGRATOR_MAPPING[trackingCode]
              ? trackingCode
              : OTHER_TRACKING_CODE;
            return {
              ...result,
              [key]: {
                tvl: (result[key]?.tvl ?? 0) + integratorData.tuu,
                OI: (result[key]?.OI ?? 0) + integratorData.OI,
                dailyVolume:
                  (result[key]?.dailyVolume ?? 0) + integratorData.volume,
                dailyFees: (result[key]?.dailyFees ?? 0) + integratorData.fees,
                dailyDau: (result[key]?.dailyDau ?? 0) + integratorData.dauu,
              },
            };
          }, {})
      : ({} as FormatedIntegratorData);
  return (
    <TableContainer
      backgroundColor="navy.700"
      borderRadius="5px"
      border="1px solid"
      borderColor="gray.900"
    >
      <Table variant="simple">
        <Thead>
          <Tr height="40px" textAlign="left">
            <Th>Action</Th>
            <Th>TVL</Th>
            <Th>Daily OI</Th>
            <Th>Daily Volume</Th>
            <Th>Daily Fees</Th>
            <Th>Daily DAU</Th>
          </Tr>
        </Thead>
        <Tbody>
          {[...Object.keys(INTEGRATOR_MAPPING), OTHER_TRACKING_CODE].map(
            (tracking_code) => {
              return (
                <Tr height="60px" key={tracking_code}>
                  <Td>
                    {INTEGRATOR_MAPPING[tracking_code]
                      ? INTEGRATOR_MAPPING[tracking_code].label
                      : tracking_code}
                  </Td>
                  <Td>${formatNumber(formatedData[tracking_code]?.tvl)}</Td>
                  <Td>${formatNumber(formatedData[tracking_code]?.OI)}</Td>
                  <Td>
                    ${formatNumber(formatedData[tracking_code]?.dailyVolume)}
                  </Td>
                  <Td>
                    ${formatNumber(formatedData[tracking_code]?.dailyFees)}
                  </Td>
                  <Td>
                    ${formatNumber(formatedData[tracking_code]?.dailyDau)}
                  </Td>
                </Tr>
              );
            }
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
