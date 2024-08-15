'use client';

import { ImArrowUpRight2 } from 'react-icons/im';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/next-js';
import { Fragment, ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const data: {
  link?: string;
  label: string;
  hideOnHeader?: boolean;
  externalLink?: string;
}[] = [
  {
    link: '/integrators',
    label: 'Integrators',
  },
  {
    link: '/perps-stats',
    label: 'Perps Stats',
  },
  {
    link: '/liquidity-stats',
    label: 'Liquidity Stats',
  },
  // {
  //   externalLink: 'https://docs.synthetix.io/',
  //   label: 'Docs',
  // },
];

const externalButtons = [
  {
    externalLink: 'https://liquidity.synthetix.eth.limo/',
    label: 'Liquidity App',
  },
];

interface MenuProps {
  isOpen?: boolean;
}

export default function Menu({ isOpen, ...rest }: MenuProps) {
  const pathname = usePathname();
  const urlFolderPathName = pathname.split('/')[1];

  return (
    <>
      <Flex
        as="ul"
        left={!!isOpen ? 0 : '-100%'}
        justifyContent="flex-start"
        flexWrap="nowrap"
        zIndex="101"
        width="100%"
        position={{ base: 'fixed', xl: 'static' }}
        direction={{ base: 'column', xl: 'row' }}
        top="0"
        pt={{ base: '100px', xl: '0px' }}
        height={{ base: '100%', xl: 'auto' }}
        transition="all 250ms linear"
        background={{ base: 'navy.900', xl: 'transparent' }}
        {...rest}
      >
        {data.map((item) => {
          const isActive = urlFolderPathName === item?.link?.split('/')?.[1];
          return (
            <MenuItem key={item.label} {...rest}>
              {item.link ? (
                <ChakraLink
                  transition={isActive ? 'color 0.3s ease-out' : ''}
                  _hover={{ color: 'cyan.500' }}
                  href={item.link}
                >
                  <Text
                    fontFamily="heading"
                    fontWeight="bold"
                    color={isActive ? 'cyan.500' : 'gray.500'}
                    _hover={{ color: 'white' }}
                    fontSize={{ base: '2xl', md: 'sm' }}
                  >
                    {item.label}
                  </Text>
                </ChakraLink>
              ) : item.externalLink ? (
                <ChakraLink
                  href={item.externalLink}
                  color="#828295"
                  _hover={{ color: 'cyan.500' }}
                  key={item.link}
                  target="_blank"
                >
                  <Text
                    fontFamily="heading"
                    fontWeight="bold"
                    color="gray.500"
                    _hover={{ color: 'white' }}
                    fontSize={{ base: '2xl', md: 'sm' }}
                  >
                    {item.label}
                  </Text>
                </ChakraLink>
              ) : (
                <Fragment key={item.label} />
              )}
            </MenuItem>
          );
        })}
        <Flex ml={{ base: '16px', xl: 'auto' }} gap="2" alignItems="center">
          {externalButtons.map((item) => {
            return (
              <Link href={item.externalLink} key={item.label}>
                <Button
                  size="sm"
                  colorScheme="cyan"
                  key={item.label}
                  rightIcon={<ImArrowUpRight2 />}
                  mt={{ base: '8px', xl: '0' }}
                  borderRadius="4px"
                >
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </Flex>
      </Flex>
    </>
  );
}

const MenuItem = ({ children, ...rest }: { children: ReactNode }) => (
  <Box
    display={{ base: 'block', md: 'inline-block' }}
    margin={{ base: '0 0 51px 20px', md: '10px 16px' }}
    as="li"
    {...rest}
  >
    {children}
  </Box>
);
