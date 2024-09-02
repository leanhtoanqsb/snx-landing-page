import { Icon, IconProps } from '@chakra-ui/react';

export const CheckIcon = ({
  width = '12px',
  height = '12px',
  ...props
}: IconProps) => {
  return (
    <Icon
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      {...props}
    >
      <path
        d="M4.99999 7.58576L9.59599 2.98926L10.3035 3.69626L4.99999 8.99976L1.81799 5.81776L2.52499 5.11076L4.99999 7.58576Z"
        fill="currentcolor"
      />
    </Icon>
  );
};
