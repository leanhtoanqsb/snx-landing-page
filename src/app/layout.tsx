// app/layout.tsx
import { Providers } from './providers';
import Header from '../components/Header';
import { Box, Divider } from '@chakra-ui/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Divider width="100%" borderColor="gray.900" />
          <Box pt="64px" overflowX="hidden">
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
