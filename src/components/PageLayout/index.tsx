import { Box, Divider, Flex, FlexProps } from '@chakra-ui/react';
import { PropsWithChildren, ReactNode } from 'react';
import Footer from '@/components/Footer';

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Wrapper>{children}</Wrapper>
      <Divider minW="100%" borderColor="gray.900" />
      <Wrapper>
        <Footer />
      </Wrapper>
    </>
  );
}

function Wrapper({ children, ...props }: PropsWithChildren) {
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
