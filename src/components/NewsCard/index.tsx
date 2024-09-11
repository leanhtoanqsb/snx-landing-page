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
  Card,
} from '@chakra-ui/react';

interface NewCardProps extends FlexProps {
  imageUri?: string;
  title?: string;
  description?: string;
  link?: string;
}

export const NewsCard = ({
  imageUri,
  title,
  description,
  link,
}: NewCardProps) => {
  return (
    <Card variant="filled">
      <Flex
        mb="16px"
        justifyContent={{ base: 'flex-end', md: 'space-between' }}
        width="100%"
      >
        <Image alt={`${title}-logo`} src={imageUri} w="100%" h="203px" />
      </Flex>
      <Heading
        mb="16px"
        as="h3"
        fontSize="18px"
        lineHeight="28px"
        color="gray.50"
      >
        {title}
      </Heading>
      <Text
        fontSize="16px"
        lineHeight="28px"
        color="gray.500"
        noOfLines={3}
        flex="1"
      >
        {description}
      </Text>
      <LinkBox mt="16px" width="max-content">
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
              Learn More
            </Text>
          </LinkOverlay>
          <ArrowDiagonal ml={2} />
        </Flex>
      </LinkBox>
    </Card>
  );
};
