import { Heading, HeadingProps } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export function HeroHeading({
  children,
  ...props
}: PropsWithChildren<HeadingProps>) {
  return (
    <Heading
      fontSize={{ base: '30px', md: '36px' }}
      lineHeight={{ base: '36px', md: '43px' }}
      as="h1"
      color="gray.50"
      {...props}
    >
      {children}
    </Heading>
  );
}

export function SectionHeading({
  children,
  ...props
}: PropsWithChildren<HeadingProps>) {
  return (
    <Heading
      fontSize={{ base: '24px', md: '30px' }}
      lineHeight={{ base: '30px', md: '36px' }}
      as="h2"
      color="gray.50"
      {...props}
    >
      {children}
    </Heading>
  );
}
