'use client';

import React, { useState } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  TooltipProps,
  ComposedChart,
  Legend,
  Bar,
  Line,
  Brush,
  BarChart,
} from 'recharts';
import { useQuery } from '@tanstack/react-query';
import { Box, Text, Card, Flex } from '@chakra-ui/react';
import {
  compactNumber,
  formatLocalDate,
  formatNumber,
} from '@/utils/formatters/number';
import { getIntegratorDataOption } from '@/queries/integrators';
import { IntegratorsVolumeData } from '@/components/types';
import { Props } from 'recharts/types/component/Legend';
import { ContentType } from 'recharts/types/component/DefaultLegendContent';

const CHART_SYNC_ID = 'intergrator-chart';
const CUMMULATIVE_VALUE_COLOR = '#F4BB40';
const VALUE_COLOR = 'rgba(255, 255, 255, 0.24)';

type ChartData = IntegratorsVolumeData & {
  cummulativeVolume: number;
  cummulativeOI: number;
  cummulativeFees: number;
  cummulativeDauu: number;
  cummulativeTuu: number;
};

export default function Charts() {
  const { data } = useQuery({
    ...getIntegratorDataOption(),
    select(data) {
      return data.integratorsVolume
        ?.filter((_data) => !!_data.tracking_code.match(/Kwenta/i))
        .slice(0, 30)
        .reduce<ChartData[]>((result, _data) => {
          const chartData = _data as ChartData;
          const lastItem = result[result.length - 1];
          return [
            ...result,
            {
              ...chartData,
              cummulativeVolume:
                (lastItem?.cummulativeVolume ?? 0) + chartData.volume,
              cummulativeOI: (lastItem?.cummulativeOI ?? 0) + chartData.OI,
              cummulativeDauu:
                (lastItem?.cummulativeDauu ?? 0) + chartData.dauu,
              cummulativeTuu: (lastItem?.cummulativeTuu ?? 0) + chartData.tuu,
              cummulativeFees:
                (lastItem?.cummulativeFees ?? 0) + chartData.fees,
            },
          ];
        }, []);
    },
  });
  return (
    <Box width="100%" position="relative">
      {/* Chart TVL */}
      {/* <ChartContainer
        data={data}
        dataKey={['tuu', 'cummulativeTuu']}
        chartLabel="TVL"
        chartHeight="354px"
        curveColor={CUMMULATIVE_VALUE_COLOR}
        areaColor="cyan.500"
        yTickFormatter={(value) => {
          return `$${compactNumber({ num: value, digits: 1 })}`;
        }}
      /> */}
      <Box
        mt="24px"
        display="grid"
        gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr' }}
        gridAutoRows="354px"
        gap="24px"
      >
        {/* Chart daily volume */}
        <ChartContainer
          data={data}
          dataKey={['volume', 'cummulativeVolume']}
          chartLabel="Daily Volume"
          curveColor={CUMMULATIVE_VALUE_COLOR}
          yTickFormatter={(value) => {
            return `$${compactNumber({ num: value, digits: 1 })}`;
          }}
        />

        {/* Chart daily fees */}
        <ChartContainer
          data={data}
          dataKey={['fees', 'cummulativeFees']}
          chartLabel="Daily Fees"
          curveColor={CUMMULATIVE_VALUE_COLOR}
          yTickFormatter={(value) => {
            return `$${compactNumber({ num: value, digits: 1 })}`;
          }}
        />

        {/* chart active user */}
        <ChartContainer
          data={data}
          dataKey={['dauu', 'cummulativeDauu']}
          chartLabel="Daily Active Users"
          curveColor={CUMMULATIVE_VALUE_COLOR}
          yTickFormatter={(value) => {
            return `${compactNumber({ num: value, digits: 1 })}`;
          }}
        />
        <ChartContainer
          data={data}
          dataKey={['OI', 'cummulativeOI']}
          chartLabel="Daily OI"
          curveColor={CUMMULATIVE_VALUE_COLOR}
          yTickFormatter={(value) => {
            return `$${compactNumber({ num: value, digits: 1 })}`;
          }}
        />
      </Box>

      <Box
        position="absolute"
        bgGradient="linear(to-tr, pink.500, purple.500)"
        width="618px"
        height="694px"
        left="-492px"
        top="238px"
        borderRadius="100%"
        filter="blur(250px)"
      />
    </Box>
  );
}

function ChartContainer({
  dataKey,
  data,
  yTickFormatter,
  chartHeight = '100%',
  curveColor,
  areaColor = 'transparent',
  chartLabel,
}: {
  dataKey: string[];
  data: IntegratorsVolumeData[] | undefined;
  yTickFormatter: (value: any) => string;
  chartHeight?: string;
  curveColor: string;
  areaColor?: string;
  chartLabel: string;
}) {
  const [currentTime, setCurrentTime] = useState<TimeFilter>('1m');
  return (
    <Card
      variant="filled"
      position="relative"
      zIndex="1"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'dark',
        width: '100%',
        height: chartHeight,
        '.recharts-cartesian-grid': {
          '.recharts-cartesian-grid-vertical': { display: 'none' },
          '.recharts-cartesian-grid-horizontal': { display: 'none' },
        },
        '.recharts-line-curve': { stroke: curveColor, fillOpacity: '1' },
        '.recharts-area-area': { fill: areaColor, fillOpacity: '0.1' },
        '.recharts-cartesian-axis-tick-value': { fill: 'gray.500' },
        '.recharts-bar-rectangle': { fill: 'whiteAlpha.400' },
        '.recharts-legend-item-text': { color: 'gray.500 !important' },
        '.recharts-line-dots > *': { fill: curveColor, stroke: curveColor },
        '.recharts-brush-slide': { fill: 'none' },
      }}
    >
      <Flex
        mb="56px"
        sx={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text
          fontSize="20px"
          lineHeight="28px"
          color="gray.50"
          fontWeight={500}
        >
          {chartLabel}
        </Text>
        <TimeFilter
          currentTime={currentTime}
          onChangeTime={(time) => setCurrentTime(time)}
        />
      </Flex>
      <Box flex="1 0 0">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data}>
            <CartesianGrid />

            <XAxis
              dataKey="date"
              tickLine={false}
              tickFormatter={(value) => {
                return `${formatLocalDate(value, 'MM/DD')}`;
              }}
              // tickMargin={16}
              interval={'equidistantPreserveStart'}
              style={{ fontSize: '12px' }}
            />
            {/* <YAxis tickFormatter={yTickFormatter} /> */}
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{ top: -40, left: 0 }}
              align="left"
              type="circle"
              payload={[
                {
                  id: dataKey[0],
                  value: TITLE_MAPPING[dataKey[0]],
                  type: 'circle',
                  color: VALUE_COLOR,
                  dataKey: dataKey[0],
                },
                {
                  id: dataKey[1],
                  value: 'CUMMULATIVE',
                  type: 'circle',
                  color: CUMMULATIVE_VALUE_COLOR,
                  dataKey: dataKey[1],
                },
              ]}
              content={renderLegend}
            />
            {/* <Bar dataKey={dataKey[0]} barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey={dataKey[1]} stroke="#ff7300" /> */}
            <Bar dataKey={dataKey[0]} maxBarSize={40} fill="" />
            <Line type="linear" dataKey={dataKey[1]} />
            {/* <Brush dataKey="date" height={40} stroke="#8884d8" /> */}
            <Brush fill="none">
              <BarChart>
                <Bar dataKey={dataKey[0]} maxBarSize={40} fill="" />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => {
                    return `${formatLocalDate(value, 'MM/DD')}`;
                  }}
                  height={0.001}
                  tickMargin={-20}
                  fill="none"
                  interval={4}
                  style={{ fontSize: '12px' }}
                />
              </BarChart>
            </Brush>
          </ComposedChart>
        </ResponsiveContainer>
      </Box>
    </Card>
  );
}

const renderLegend: ContentType = (props) => {
  return (
    <Flex sx={{ alignItems: 'center', gap: '24px' }}>
      {props.payload?.map((payload) => {
        return (
          <Flex key={payload.id} sx={{ alignItems: 'center', gap: '8px' }}>
            <Box
              sx={{
                width: '8px',
                height: '8px',
                borderRadius: '8px',
                bg: payload?.color,
              }}
            />
            <Box sx={{ fontSize: '12px', lineHeight: '16px' }}>
              {(payload.value as string) ?? ''}
            </Box>
          </Flex>
        );
      })}
    </Flex>
  );
};

type TimeFilter = '1y' | '1m';
function TimeFilter({
  currentTime,
  onChangeTime,
}: {
  currentTime: TimeFilter;
  onChangeTime: (time: TimeFilter) => void;
}) {
  return (
    <Flex>
      {(['1y', '1m'] as TimeFilter[]).map((time) => {
        const isActive = currentTime === time;
        return (
          <Box
            role="button"
            onClick={() => onChangeTime(time)}
            sx={{
              width: '50px',
              height: '28px',
              borderRadius: '50px',
              color: isActive ? 'gray.50' : 'gray.500',
              bg: isActive ? 'whiteAlpha.300' : 'transparent',
              textTransform: 'uppercase',
              textAlign: 'center',
              lineHeight: '28px',
              fontSize: '12px',
              fontWeight: isActive ? 'bold' : 'normal',
            }}
          >
            {time}
          </Box>
        );
      })}
    </Flex>
  );
}
function CustomTooltip({
  active,
  payload,
  label,
}: TooltipProps<string | number, string | number>) {
  if (active && payload && payload.length) {
    return (
      <Card variant="filled" sx={{ boxShadow: 'dark', p: '8px' }}>
        <Text color="gray.500">
          Date:{' '}
          <Box as="span" color="gray.500">
            {formatLocalDate(payload[0].payload?.date)}
          </Box>
        </Text>
        {payload[0].dataKey && (
          <Text color="gray.500">
            {TITLE_MAPPING[payload[0].dataKey]}
            {': '}
            <Box as="span" color="gray.50">
              {formatNumber(payload[0].value, {
                prefix: payload[1].dataKey === 'dauu' ? '' : '$',
              })}
            </Box>
          </Text>
        )}
        {payload[1].dataKey && (
          <Text color="gray.500">
            {TITLE_MAPPING[payload[1].dataKey]}
            {': '}
            <Box as="span" color={CUMMULATIVE_VALUE_COLOR}>
              {formatNumber(payload[1].value, {
                prefix: payload[1].dataKey === 'cummulativeDauu' ? '' : '$',
              })}
            </Box>
          </Text>
        )}
      </Card>
    );
  }

  return null;
}
const TITLE_MAPPING: Record<string, string> = {
  OI: 'OI',
  volume: 'Volume',
  tuu: 'TVL',
  dauu: 'Daily Active Users',
  fees: 'Fees',
  cummulativeOI: 'Cummulative OI',
  cummulativeVolume: 'Cummulative Volume',
  cummulativeTuu: 'Cummulative TVL',
  cummulativeDauu: 'Cummulative Active Users',
  cummulativeFees: 'Cummulative Fees',
};
