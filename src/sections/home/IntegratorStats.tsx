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
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react';

export default function IntegratorStats() {
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
      <TableContainer
        backgroundColor="navy.700"
        borderRadius="5px"
        border="1px solid"
        borderColor="gray.900"
      >
        <Table variant="simple">
          <Thead >
            <Tr height="40px" textAlign="left">
              <Th>
                Action
              </Th>
              <Th>
                TVL
              </Th>
              <Th>
                Daily OI
              </Th>
              <Th>
                Daily Volume
              </Th>
              <Th>
                Daily Fees
              </Th>
              <Th>
                Daily DAU
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {Array.from({ length: 10 }, (_, v) => v).map((v) => {
              return (
                <Tr height="60px" key={v}>
                  <Td>KWENTA</Td>
                  <Td>$23,839.31</Td>
                  <Td>$23,839.31</Td>
                  <Td>$23,839.31</Td>
                  <Td>$23,839.31</Td>
                  <Td>$23,839.31</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
