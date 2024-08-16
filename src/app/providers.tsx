// app/providers.tsx
'use client';
import { QueryClientProvider } from '@tanstack/react-query';

import { ChakraProvider } from '@chakra-ui/react';
import { customTheme } from '@/styles/theme';
import { getQueryClient } from '@/app/getQueryClient';

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={customTheme}>{children}</ChakraProvider>;
    </QueryClientProvider>
  );
}
