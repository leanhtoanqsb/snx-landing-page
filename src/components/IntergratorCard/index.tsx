import { ArrowDiagonal } from '@/svg/ArrowDiagonal';
import {
  Flex,
  Heading,
  Text,
  Image,
  Tag,
  FlexProps,
  LinkBox,
  LinkOverlay,
  Box,
  TagLabel,
  Card,
} from '@chakra-ui/react';

interface IntegratorCardProps extends FlexProps {
  imageUri?: string;
  name?: string;
  description?: string;
  link?: string;
  tag?: string;
}

export const IntegratorCard = ({
  imageUri,
  name,
  description,
  link,
  tag,
}: IntegratorCardProps) => {
  return (
    <Card variant="filled">
      <Flex mb="16px" justifyContent="space-between" width="100%">
        <Image
          alt={`${name}-logo`}
          src={imageUri}
          w="50px"
          h="50px"
          bg="gray.500"
        />
        <Tag
          px="8px"
          py="2px"
          background="whiteAlpha.300"
          borderRadius="4px"
          textTransform="uppercase"
          height="fit-content"
        >
          <TagLabel
            fontSize="12px"
            lineHeight="16px"
            color="white"
            fontWeight={500}
          >
            {tag}
          </TagLabel>
        </Tag>
      </Flex>

      <Heading
        mb="16px"
        as="h3"
        fontSize="18px"
        lineHeight="28px"
        color="gray.50"
      >
        {name}
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
              View {name}
            </Text>
          </LinkOverlay>
          <ArrowDiagonal ml={2} />
        </Flex>
      </LinkBox>
    </Card>
  );
};
