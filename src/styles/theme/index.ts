import { defineStyle, extendTheme } from '@chakra-ui/react';
import { theme } from '@synthetixio/v3-theme';
import { fonts } from './fonts';

const variantTableSimple = defineStyle((props) => {
  return {
    td: {
      color: 'gray.50',
      borderTopColor: 'gray.900',
      borderBottomColor: 'gray.900',
    },
    th: {
      textTransform: 'none',
      borderColor: 'gray.900',
      color: 'gray.600',
    },
  };
});
const variantCardFilled = defineStyle((props) => {
  return {
    backgroundColor: 'navy.700',
    borderRadius: 'md',
    _hover: {
      backgroundColor: 'navy.600',
    },
  };
});

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
  components: {
    ...(theme.components ?? {}),
    Table: {
      variants: {
        simple: variantTableSimple,
      },
    },
    Card: {
      variants: {
        filled: variantCardFilled,
      },
    },
  },
});
