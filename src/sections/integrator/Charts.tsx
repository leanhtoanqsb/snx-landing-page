'use client';

import React from 'react';
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
} from 'recharts';
import { useQuery } from '@tanstack/react-query';
import { Box, Text, Card } from '@chakra-ui/react';
import {
  compactNumber,
  formatLocalDate,
  formatNumber,
} from '@/utils/formatters/number';
import { getIntegratorDataOption } from '@/queries/integrators';
import { IntegratorsVolumeData } from '@/components/types';

const CHART_SYNC_ID = 'intergrator-chart';

export default function Charts() {
  const { data } = useQuery({
    ...getIntegratorDataOption(),
    select(data) {
      return data.integratorsVolume
        ?.filter((_data) => !!_data.tracking_code.match(/Kwenta/i))
        .slice(0, 30);
    },
  });
  return (
    <Box pt="100px" pb="200px" width="100%" id="hero" position="relative">
      {/* Chart TVL */}
      <ChartContainer
        data={data}
        dataKey={['tuu', 'tuu']}
        chartLabel="TVL"
        chartHeight="354px"
        curveColor="cyan.500"
        areaColor="cyan.500"
        yTickFormatter={(value) => {
          return `$${compactNumber({ num: value, digits: 1 })}`;
        }}
      />
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
          dataKey={['volume', 'volume']}
          chartLabel="Daily Volume"
          curveColor="pink.400"
          yTickFormatter={(value) => {
            return `$${compactNumber({ num: value, digits: 1 })}`;
          }}
        />

        {/* Chart daily fees */}
        <ChartContainer
          data={data}
          dataKey={['fees', 'fees']}
          chartLabel="Daily Fees"
          curveColor="pink.400"
          yTickFormatter={(value) => {
            return `$${compactNumber({ num: value, digits: 1 })}`;
          }}
        />

        {/* chart active user */}
        <ChartContainer
          data={data}
          dataKey={['dauu', 'dauu']}
          chartLabel="Daily Active Users"
          curveColor="pink.400"
          yTickFormatter={(value) => {
            return `${compactNumber({ num: value, digits: 1 })}`;
          }}
        />
        <ChartContainer
          data={data}
          dataKey={['OI', 'OI']}
          chartLabel="Daily OI"
          curveColor="pink.400"
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
  return (
    <Card
      variant="filled"
      position="relative"
      zIndex="1"
      sx={{
        boxShadow: 'dark',
        width: '100%',
        height: chartHeight,
        '.recharts-cartesian-grid': {
          '.recharts-cartesian-grid-vertical': { display: 'none' },
        },
        '.recharts-layer': {
          '.recharts-area-curve': { stroke: curveColor, fillOpacity: '1' },
          '.recharts-area-area': { fill: areaColor, fillOpacity: '0.1' },
          '.recharts-cartesian-axis-tick-value': { fill: 'gray.500' },
        },
      }}
    >
      <Text
        fontSize="20px"
        lineHeight="28px"
        color="gray.50"
        mb="24px"
        fontWeight={500}
      >
        {chartLabel}
      </Text>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data}>
          <CartesianGrid />

          <XAxis
            dataKey="date"
            tickLine={false}
            tickFormatter={(value) => {
              return `${formatLocalDate(value, 'MM/DD')}`;
            }}
            tickMargin={16}
            interval={'equidistantPreserveStart'}
          />
          <YAxis tickFormatter={yTickFormatter} />
          <Tooltip />
          <Legend wrapperStyle={{ top: -24, left: 0 }} />
          {/* <Bar dataKey={dataKey[0]} barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey={dataKey[1]} stroke="#ff7300" /> */}
          <Bar dataKey={dataKey[0]} barSize={20} />
          <Line type="linear" dataKey={dataKey[1]} />
        </ComposedChart>
      </ResponsiveContainer>
    </Card>
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
        <Text color="gray.50">{formatLocalDate(payload[0].payload?.day)}</Text>
        <Text color="gray.50">
          {formatNumber(payload[0].value, { prefix: '$' })}
        </Text>
      </Card>
    );
  }

  return null;
}
