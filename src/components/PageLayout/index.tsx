import { Box, Flex, FlexProps } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

interface PageLayoutProps extends PropsWithChildren, FlexProps {}

export default function PageLayout({ children, ...props }: PageLayoutProps) {
  return (
    <Flex minW="100%" bg="navy.900" justifyContent="center">
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
        {...props}
      >
        {children}
      </Box>
    </Flex>
  );
}
