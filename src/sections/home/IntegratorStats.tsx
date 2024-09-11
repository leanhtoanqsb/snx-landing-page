import { getQueryClient } from '@/app/getQueryClient';
import { SectionHeading } from '@/components/@ui/Heading';
import { SectionParagraph } from '@/components/@ui/Paragraph';
import { getIntegratorDataOption } from '@/queries/integrators';
import { ArrowDiagonal } from '@/svg/ArrowDiagonal';
import { formatNumber } from '@/utils/formatters/number';
import { integrators } from '@/utils/integrators';
import { Image } from '@chakra-ui/next-js';
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
  Card,
  Flex,
  Text,
  Show,
} from '@chakra-ui/react';
import { dehydrate, HydrationBoundary, useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { ReactNode } from 'react';

export default function IntegratorStats() {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(getIntegratorDataOption());
  return (
    <Box width="100%" id="integrator-stats" position="relative">
      <SectionHeading mb="16px">Integrator Stats</SectionHeading>
      <SectionParagraph mb="24px" maxW="700px">
        Explore the growing ecosystem of decentralized apps built on top of
        Synthetix liquidity. The Synthetix ecosystem is comprised of derivatives
        exchanges, sUSD utility, and more
      </SectionParagraph>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <StatsTable />
      </HydrationBoundary>
    </Box>
  );
}

type IntegratorStatData = {
  tvl: number;
  OI: number;
  dailyVolume: number;
  dailyFees: number;
  dailyDau: number;
};

type FormatedIntegratorStatData = Record<string, IntegratorStatData>;

const OTHER_TRACKING_CODE = 'Other';

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
          ?.reduce?.<FormatedIntegratorStatData>((result, integratorData) => {
            const trackingCode = integratorData.tracking_code;
            const key = integrators.find(
              (integrator) => integrator.tracking_code === trackingCode
            )
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
      : ({} as FormatedIntegratorStatData);
  return (
    <>
      <Show above="md">
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
              {[
                ...integrators.map((_i) => _i.tracking_code),
                OTHER_TRACKING_CODE,
              ].map((tracking_code, index) => {
                const integrator = integrators[index];

                return (
                  <Tr height="60px" key={tracking_code}>
                    <Td>
                      <Flex sx={{ alignItems: 'center', gap: '12px' }}>
                        {integrator?.uri && (
                          <Image
                            src={integrator.uri}
                            alt=""
                            width={30}
                            height={30}
                          />
                        )}
                        <Text sx={{ fontSize: '20px', lineHeight: '28px' }}>
                          {integrator ? integrator.name : tracking_code}
                        </Text>
                        {integrator && <ArrowDiagonal />}
                      </Flex>
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
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Show>
      <Show below="md">
        <Flex sx={{ flexDirection: 'column', gap: '24px', width: '100%' }}>
          {[
            ...integrators.map((_i) => _i.tracking_code),
            OTHER_TRACKING_CODE,
          ].map((tracking_code, index) => {
            const integrator = integrators[index];
            return (
              <Box key={tracking_code}>
                <IntegratorStatCard
                  label={integrator?.name ?? tracking_code}
                  data={formatedData[tracking_code]}
                />
              </Box>
            );
          })}
        </Flex>
      </Show>
    </>
  );
}

function IntegratorStatCard({
  label,
  data,
}: {
  label: ReactNode;
  data: IntegratorStatData;
}) {
  return (
    <Card variant="filled" px="16px" py="24px">
      <Flex mb="16px" sx={{ alignItems: 'center', gap: '12px' }}>
        <Image src={''} alt="" width={30} height={30} />
        <Text sx={{ fontSize: '20px', lineHeight: '28px' }}>{label}</Text>
        <ArrowDiagonal />
      </Flex>

      <StatItem label="TVL" value={`&${formatNumber(data?.tvl)}`} />
      <StatItem label="Daily OI" value={`&${formatNumber(data?.OI)}`} />
      <StatItem
        label="Daily Volume"
        value={`&${formatNumber(data?.dailyVolume)}`}
      />
      <StatItem
        label="Daily Fees"
        value={`&${formatNumber(data?.dailyFees)}`}
      />
      <StatItem label="Daily DAU" value={`&${formatNumber(data?.dailyDau)}`} />
    </Card>
  );
}
function StatItem({ label, value }: { label: ReactNode; value: ReactNode }) {
  return (
    <Flex
      sx={{
        height: '60px',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Text sx={{ fontSize: '14px', color: 'gray.600' }}>{label}</Text>
      <Text sx={{ fontSize: '16px', color: 'white' }}>{value}</Text>
    </Flex>
  );
}
