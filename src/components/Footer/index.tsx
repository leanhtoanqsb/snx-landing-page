import { Flex } from '@chakra-ui/react';
import Logo from '@/components/Logo';
import Socials from '@/components/Socials';

export default function Footer() {
  return (
    <Flex p="16px" justifyContent="space-between">
      <Logo small={true} />
      <Socials isFooter />
    </Flex>
  );
}
