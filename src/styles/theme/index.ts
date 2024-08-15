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
  components: {
    ...(theme.components ?? {}),
    Select: {
      variants: {
        outline: {
          field: {
            borderColor: 'gray.900',
            borderRadius: '4px',
            color: 'white',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            option: {
              backgroundColor: 'navy.700',
            },
          },
          icon: {
            color: 'white',
          },
        },
      },
    },
    Table: {
      variants: {
        simple: {
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
        },
      },
    },
    Card: {
      variants: {
        filled: {
          container: {
            backgroundColor: 'navy.700',
            borderRadius: '5px',
            border: '1px solid',
            borderColor: 'gray.900',
            overflow: 'hidden',
            padding: '24px',
            transition: '0.3s',
            _hover: {
              boxShadow: '0px 0px 8px 1px',
              boxShadowColor: 'gray.900',
            },
          },
        },
      },
    },
  },
});
