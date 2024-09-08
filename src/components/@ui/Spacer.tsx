import { Box, ResponsiveObject } from '@chakra-ui/react';

export default function Spacer({
  gap,
}: {
  gap: number | string | ResponsiveObject<string>;
}) {
  let _gap: any = gap;
  if (typeof gap === 'number') _gap = `${gap}px`;
  return <Box pt={_gap} />;
}
