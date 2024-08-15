import { extendTheme } from '@chakra-ui/react';
import { theme } from '@synthetixio/v3-theme';
import { fonts } from './fonts';

export const customTheme = extendTheme({
  ...theme,
  colors: {
    ...theme.colors,
    gray: {
      ...theme.colors.gray,
      50: '#FEFEFE',
      600: '#828295',
      900: '#2D2D38',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'navy.900',
      },
    },
  },
  breakpoints: {
    ...theme.breakpoints,
    c900: '950px',
  },
  fonts,
});
