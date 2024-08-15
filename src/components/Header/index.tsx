// components/Header.tsx
'use client';
import {
  Flex,
  Text,
  MenuButton,
  MenuItem,
  MenuList,
  Box,
  Button,
  Input,
  Image,
  Show,
} from '@chakra-ui/react';
import { HamburgerIcon, StarIcon, SettingsIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { SNXIcon } from '../Icons';
import { useState, useEffect } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import Menu from '../Menu';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add('stop-scrolling');
    } else {
      document.documentElement.classList.remove('stop-scrolling');
    }
  }, [isOpen]);

  return (
    <Flex
      as="header"
      minH="64px"
      alignItems="center"
      justifyContent="center"
      minW="100%"
      bg="navy.900"
      borderBottomColor="gray.900"
      borderBottomWidth="1px"
      borderBottomStyle="solid"
      zIndex={9999}
      position={{ base: 'fixed' }}
    >
      <Flex
        w="100%"
        alignItems="center"
        justifyContent={{ base: 'center', xl: 'space-between' }}
        maxW={{
          base: '100%',
          md: '48rem',
          lg: '62rem',
          xl: '80rem',
          '2xl': '96rem',
        }}
        px="24px"
        gap="16px"
      >
        <Link href="/">
          <Image
            src="/snx.svg"
            width={200}
            height={12}
            cursor="pointer"
            mr={{ base: '', xl: '32px' }}
            alt="logo"
          />
        </Link>
        {/* if using below="xl" we will see both, menu and hamburger menu */}
        <Show breakpoint="(max-width: 1279px)">
          <Box
            cursor="pointer"
            userSelect="none"
            top="25px"
            left="20px"
            position={isOpen ? 'fixed' : 'absolute'}
            zIndex="999"
          >
            <HamburgerMenu
              isOpen={isOpen}
              menuClicked={() => setIsOpen(!isOpen)}
              width={22}
              height={16}
              strokeWidth={2}
              rotate={0}
              color="white"
              borderRadius={0}
              animationDuration={0.3}
            />
          </Box>
        </Show>
        <Menu isOpen={isOpen} data-test-id="header-menu" />
      </Flex>
    </Flex>
  );
}
