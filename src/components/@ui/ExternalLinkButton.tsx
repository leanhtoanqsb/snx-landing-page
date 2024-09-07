import { ArrowDiagonal } from '@/svg/ArrowDiagonal';
import { Flex, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

export default function ExternalLinkButton({
  link,
  children,
}: {
  link: string;
  children: ReactNode;
}) {
  return (
    <LinkBox width="max-content">
      <Flex
        px="12px"
        height="32px"
        alignItems="center"
        border="1px solid"
        borderRadius="4px"
        borderColor="gray.900"
        width="fit-content"
        color="white"
        transition="0.3s"
        gap="8px"
        _hover={{
          borderColor: 'cyan.500',
          color: 'cyan.500',
        }}
      >
        <LinkOverlay href={link} target="_blank">
          <Text
            fontSize="14px"
            fontFamily="heading"
            fontWeight={700}
            lineHeight="20px"
          >
            {children}
          </Text>
        </LinkOverlay>
        <ArrowDiagonal />
      </Flex>
    </LinkBox>
  );
}
