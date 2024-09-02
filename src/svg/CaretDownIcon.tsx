import { Icon, IconProps } from '@chakra-ui/react';

export const CaretDownIcon = ({
  width = '18px',
  height = '18px',
  ...props
}: IconProps) => {
  return (
    <Icon
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      {...props}
    >
      <path
        d="M9.20973 9.7125L12.9222 6L13.9827 7.0605L9.20973 11.8335L4.43673 7.0605L5.49723 6L9.20973 9.7125Z"
        fill="currentcolor"
      />
    </Icon>
  );
};
