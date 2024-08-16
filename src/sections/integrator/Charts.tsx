'use client';

import React, { PureComponent } from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
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
} from '@chakra-ui/react';

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
  console.log('data', data);
  return (
    <Box py="100px" width="100%" id="hero" position="relative" maxW="800px">
      <Box sx={{ width: '2000px', height: '500px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            // margin={{
            //   top: 5,
            //   right: 30,
            //   left: 20,
            //   bottom: 5,
            // }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <YAxis dataKey="daily_fee" />

            <XAxis
              dataKey="day"
              tickFormatter={(value) => {
                const time = new Date(value);
                return `${time.getDate()}/${time.getMonth()}`;
              }}
            />

            <Line
              strokeWidth={2}
              dot={false}
              dataKey="daily_fee"
              stroke="#fff"
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}
