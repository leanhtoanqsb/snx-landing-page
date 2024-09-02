import { MagnifyingGlass } from '@/svg/MagnifyingGlass';
import { Flex, Input } from '@chakra-ui/react';

export default function InputSearch({ height = 48 }: { height?: number }) {
  return (
    <Flex sx={{ alignItems: 'center', gap: '12px', height: `${height}px` }}>
      <Input
        placeholder="Search"
        sx={{
          height: '100%',
          border: '1px solid',
          borderColor: 'gray.900',
          borderRadius: '4px',
          _focus: { borderColor: 'gray.500', outline: 'none' },
          _focusVisible: { borderColor: 'gray.500', outline: 'none' },
          _hover: { borderColor: 'gray.500', outline: 'none' },
          _active: { borderColor: 'gray.500', outline: 'none' },
        }}
      />
      <Flex
        role="button"
        sx={{
          flexShrink: 0,
          height: '100%',
          aspectRatio: '1/1',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid',
          borderColor: 'gray.900',
          borderRadius: '4px',
          transition: '0.3s',
          _hover: { borderColor: 'gray.500' },
        }}
      >
        <MagnifyingGlass />
      </Flex>
    </Flex>
  );
}
