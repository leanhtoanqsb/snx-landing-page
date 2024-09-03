import { Icon, IconProps } from '@chakra-ui/react';

export const ArrowLeftIcon = ({
  width = '14px',
  height = '14px',
  ...props
}: IconProps) => {
  return (
    <Icon
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      {...props}
    >
      <path
        d="M4.56631 6.41672H11.6666V7.58339H4.56631L7.69531 10.7124L6.87048 11.5372L2.33331 7.00006L6.87048 2.46289L7.69531 3.28772L4.56631 6.41672Z"
        fill="currentcolor"
      />
    </Icon>
  );
};
