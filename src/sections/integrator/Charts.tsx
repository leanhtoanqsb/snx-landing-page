'use client';

import React, { PureComponent, ReactNode } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  TooltipProps,
} from 'recharts';
import fetchIntegratorsData from '@/api/integrator';
import Spartan from '@/svg/Spartan';
import { Link } from '@chakra-ui/next-js';
import { useQuery } from '@tanstack/react-query';
import {
  Box,
  Button,
  Flex,
  Show,
  Text,
  Image,
  Heading,
  Card,
} from '@chakra-ui/react';
import { formatLocalDate, formatNumber } from '@/utils/formatters/number';

const CHART_SYNC_ID = 'intergrator-chart';

export default function Charts() {
  const { data } = useQuery({
    queryKey: ['integrators-data'],
    queryFn: fetchIntegratorsData,
    select(data) {
      return data.integratorsVolume
        ?.filter((_data) => !!_data.tracking_code.includes('Kwenta'))
        .slice(0, 30);
    },
  });
  return (
    <Box pt="100px" pb="200px" width="100%" id="hero" position="relative">
      {/* Chart TVL */}
      <ChartContainer
        chartLabel="TVL"
        chartHeight="354px"
        curveColor="cyan.500"
        areaColor="cyan.500"
      >
        <AreaChart data={data} syncId={CHART_SYNC_ID}>
          <CartesianGrid />
          <YAxis dataKey="daily_fee" axisLine={false} tickLine={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            tickFormatter={(value) => {
              return `${formatLocalDate(value, 'MM/DD')}`;
            }}
            tickMargin={16}
            interval={'equidistantPreserveStart'}
          />
          <Tooltip content={CustomTooltip} />
          <Area type="monotone" dataKey="daily_fee" strokeWidth={3} />
        </AreaChart>
      </ChartContainer>
      <Box
        mt="24px"
        display="grid"
        gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr' }}
        gridAutoRows="354px"
        gap="24px"
      >
        {/* Chart daily volume */}
        <ChartContainer chartLabel="Daily Volume" curveColor="pink.400">
          <AreaChart data={data} syncId={CHART_SYNC_ID}>
            <CartesianGrid />
            <YAxis dataKey="daily_fee" axisLine={false} tickLine={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickFormatter={(value) => {
                return `${formatLocalDate(value, 'MM/DD')}`;
              }}
              tickMargin={16}
              interval={'equidistantPreserveStart'}
            />
            <Tooltip content={CustomTooltip} />
            <Area type="monotone" dataKey="daily_fee" strokeWidth={3} />
          </AreaChart>
        </ChartContainer>

        {/* Chart daily fees */}
        <ChartContainer chartLabel="Daily Fees" curveColor="pink.400">
          <AreaChart data={data} syncId={CHART_SYNC_ID}>
            <CartesianGrid />
            <YAxis dataKey="daily_fee" axisLine={false} tickLine={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickFormatter={(value) => {
                return `${formatLocalDate(value, 'MM/DD')}`;
              }}
              tickMargin={16}
              interval={'equidistantPreserveStart'}
            />
            <Tooltip content={CustomTooltip} />
            <Area type="monotone" dataKey="daily_fee" strokeWidth={3} />
          </AreaChart>
        </ChartContainer>

        {/* chart active user */}
        <ChartContainer chartLabel="Daily Active Users" curveColor="pink.400">
          <AreaChart data={data} syncId={CHART_SYNC_ID}>
            <CartesianGrid />
            <YAxis dataKey="daily_fee" axisLine={false} tickLine={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickFormatter={(value) => {
                return `${formatLocalDate(value, 'MM/DD')}`;
              }}
              tickMargin={16}
              interval={'equidistantPreserveStart'}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="daily_fee" strokeWidth={3} />
          </AreaChart>
        </ChartContainer>
        {/* chart OI */}
        <ChartContainer chartLabel="Daily OI" curveColor="pink.400">
          <AreaChart data={data} syncId={CHART_SYNC_ID}>
            <CartesianGrid />
            <YAxis dataKey="daily_fee" axisLine={false} tickLine={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickFormatter={(value) => {
                return `${formatLocalDate(value, 'MM/DD')}`;
              }}
              tickMargin={16}
              interval={'equidistantPreserveStart'}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="daily_fee" strokeWidth={3} />
          </AreaChart>
        </ChartContainer>
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
  children,
  chartHeight = '100%',
  curveColor,
  areaColor = 'transparent',
  chartLabel,
}: {
  children: JSX.Element;
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
        {children}
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
