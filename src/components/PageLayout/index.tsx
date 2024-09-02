import { Box, Divider, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Footer from '@/components/Footer';
import IntegratorHeader from '../IntegratorHeader';

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Wrapper>
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ position: 'absolute', top: 0, left: 0 }}>
            <IntegratorHeader />
          </Box>
        </Box>
        {children}
      </Wrapper>
      <Divider minW="100%" borderColor="gray.900" />
      <Wrapper>
        <Footer />
      </Wrapper>
    </>
  );
}

function Wrapper({ children }: { children: ReactNode }) {
  return (
    <Flex minW="100%" bg="navy.900" justifyContent="center" position="relative">
      <Box
        w="100%"
        maxW={{
          base: '100%',
          md: '48rem',
          lg: '62rem',
          xl: '80rem',
          '2xl': '96rem',
        }}
        px={{ base: '16px', lg: '24px' }}
      >
        {children}
      </Box>
    </Flex>
  );
}
