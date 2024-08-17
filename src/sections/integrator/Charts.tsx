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
import { formatLocalDate } from '@/utils/formatters/number';

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
    <Box py="100px" width="100%" id="hero" position="relative">
      <ChartContainer
        chartLabel="TVL"
        chartHeight="300px"
        curveColor="cyan.500"
        areaColor="cyan.500"
      >
        <AreaChart data={data}>
          <CartesianGrid />
          <YAxis dataKey="daily_fee" axisLine={false} tickLine={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            tickFormatter={(value) => {
              return `${formatLocalDate(value, 'MM/DD')}`;
            }}
            tickMargin={16}
            interval={1}
          />
          <Tooltip />
          <Area type="monotone" dataKey="daily_fee" strokeWidth={3} />
        </AreaChart>
      </ChartContainer>

      <Box
        position="absolute"
        bgGradient="linear(to-tr, green.500, cyan.500)"
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
  chartHeight,
  curveColor,
  areaColor,
  chartLabel,
}: {
  children: JSX.Element;
  chartHeight: string;
  curveColor: string;
  areaColor: string;
  chartLabel: string;
}) {
  return (
    <Card
      variant="filled"
      position="relative"
      zIndex="1"
      sx={{
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
