import { ArrowDiagonal } from '@/svg/ArrowDiagonal';
import {
  Flex,
  Heading,
  Text,
  Image,
  FlexProps,
  LinkBox,
  LinkOverlay,
  Box,
} from '@chakra-ui/react';

interface NewCardProps extends FlexProps {
  imageUrl?: string;
  title?: string;
  description?: string;
  link?: string;
}

export const NewsCard = ({
  imageUrl,
  title,
  description,
  link,
}: NewCardProps) => {
  return (
    <Box>
      <Flex
        justifyContent={{ base: 'flex-end', md: 'space-between' }}
        width="100%"
      >
        <Image
          display={{ base: 'none', md: 'unset' }}
          alt={`${name}-logo`}
          src={imageUrl}
        />
      </Flex>
      <Heading my="16px" fontSize="18px">
        {title}
      </Heading>
      <Text
        fontFamily="heading"
        fontSize="16px"
        lineHeight="24px"
        color="gray.500"
      >
        {description}
      </Text>
      <LinkBox mt="16px">
        <Flex
          alignItems="center"
          p="10px 16px"
          bg="transparent"
          border="1px"
          borderColor="cyan.500"
          borderRadius="4px"
          width="fit-content"
        >
          <LinkOverlay href={link} target="_blank">
            <Text
              fontSize="14px"
              fontFamily="heading"
              fontWeight={700}
              lineHeight="20px"
              color="cyan.500"
            >
              Deposit Liquidity
            </Text>
          </LinkOverlay>
          <ArrowDiagonal ml={2} />
        </Flex>
      </LinkBox>
    </Box>
  );
};
