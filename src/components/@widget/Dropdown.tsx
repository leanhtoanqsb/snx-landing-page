import { CaretDownIcon } from '@/svg/CaretDownIcon';
import { CheckIcon } from '@/svg/CheckIcon';
import { XIcon } from '@/svg/XIcon';
import { Box, BoxProps, Button } from '@chakra-ui/react';
import { ReactNode, useState } from 'react';

export default function Dropdown({
  children,
  menu,
  wrapperSx = {},
  menuWrapperSx = {},
  buttonSx = {},
}: {
  children: ReactNode;
  menu: ReactNode;
  wrapperSx?: BoxProps['sx'];
  menuWrapperSx?: BoxProps['sx'];
  buttonSx?: BoxProps['sx'];
}) {
  const [open, setOpen] = useState(false);
  const onClickButton = () => setOpen((prev) => !prev);
  return (
    <Box sx={{ position: 'relative', zIndex: 1, ...wrapperSx }}>
      <Button
        onClick={onClickButton}
        sx={{
          width: '100%',
          position: 'relative',
          color: 'white',
          border: '1px solid',
          borderColor: 'gray.900',
          bg: 'navy.900',
          height: '48px',
          px: '24px',
          _hover: { bg: 'navy.700' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '8px',
          ...buttonSx,
        }}
      >
        <Box>{children}</Box>
        <Box
          sx={{
            transition: '0.3s',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <CaretDownIcon />
        </Box>
      </Button>
      <Box
        opacity={open ? 1 : 0}
        sx={{
          bg: 'navy.900',
          borderRadius: '4px',
          border: '1px solid',
          borderColor: 'gray.900',
          transition: '0.3s',
          position: 'absolute',
          top: 'calc(100% + 4px)',
          left: 0,
          width: '100%',
          ...menuWrapperSx,
        }}
      >
        {menu}
      </Box>
    </Box>
  );
}

export function CheckableDropdownItem({
  children,
  onClick,
  isActive,
  wrapperSx,
}: {
  children: ReactNode;
  onClick: () => void;
  isActive: boolean;
  wrapperSx?: BoxProps['sx'];
}) {
  return (
    <Box
      role="button"
      onClick={onClick}
      sx={{
        px: '24px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: 'white',
        bg: isActive ? 'gray.900' : 'navy.900',
        _hover: {
          bg: 'navy.700',
        },
        ...wrapperSx,
      }}
    >
      <Box
        sx={{
          width: '16px',
          height: '16px',
          borderRadius: '2px',
          border: '2px solid',
          borderColor: 'gray.500',
          bg: isActive ? 'gray.500' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {isActive && <CheckIcon color="black" />}
      </Box>
      {children}
    </Box>
  );
}
export function ClearSelectionItem({
  children,
  onClick,
  wrapperSx,
}: {
  children: ReactNode;
  onClick: () => void;
  wrapperSx?: BoxProps['sx'];
}) {
  return (
    <Box
      role="button"
      onClick={onClick}
      sx={{
        px: '24px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: 'white',
        bg: 'navy.900',
        _hover: {
          bg: 'navy.700',
        },
        ...wrapperSx,
      }}
    >
      <Box
        sx={{
          width: '16px',
          height: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <XIcon />
      </Box>
      {children}
    </Box>
  );
}

export function DropdownItem({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  return <Box onClick={onClick}>{children}</Box>;
}
