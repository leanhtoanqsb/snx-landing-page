import { Box } from '@chakra-ui/react';

export default function Spacer({ gap }: { gap: number }) {
  return <Box pt={`${gap}px`} />;
}
