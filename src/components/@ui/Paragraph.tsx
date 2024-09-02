import { Text, TextProps } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export function SectionParagraph({
  children,
  ...props
}: PropsWithChildren<TextProps>) {
  return (
    <Text
      fontSize="16px"
      lineHeight="24px"
      color="gray.500"
      fontWeight={400}
      {...props}
    >
      {children}
    </Text>
  );
}
