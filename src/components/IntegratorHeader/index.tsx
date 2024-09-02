import { Box, Flex } from '@chakra-ui/react';
import { integrators } from '@/utils/integrators';
import Link from 'next/link';

export default function IntegratorHeader() {
  return (
    <Flex sx={{ gap: '34px', height: '65px', alignItems: 'center' }}>
      {integrators.map((integrator) => {
        return (
          <Box
            as={Link}
            href={`/integrator/${integrator.name.toLowerCase()}`}
            key={integrator.name}
            sx={{
              transition: '0.3s',
              color: 'gray.500',
              fontWeight: 'bold',
              fontSize: '14px',
              lineHeight: '20px',
              _hover: { color: 'gray.50' },
            }}
          >
            {integrator.name}
          </Box>
        );
      })}
    </Flex>
  );
}
