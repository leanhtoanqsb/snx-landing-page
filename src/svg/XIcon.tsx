import { Icon, IconProps } from '@chakra-ui/react';

export const XIcon = ({
  width = '16px',
  height = '16px',
  ...props
}: IconProps) => {
  return (
    <Icon
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M7.99999 7.05781L11.3 3.75781L12.2427 4.70048L8.94266 8.00048L12.2427 11.3005L11.3 12.2431L7.99999 8.94315L4.69999 12.2431L3.75732 11.3005L7.05732 8.00048L3.75732 4.70048L4.69999 3.75781L7.99999 7.05781Z"
        fill="currentcolor"
      />
    </Icon>
  );
};
