import { Icon, IconProps } from '@chakra-ui/react';

export const MagnifyingGlass = ({
  width = '24px',
  height = '24px',
  ...props
}: IconProps) => {
  return (
    <Icon
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <g filter="url(#filter0_d_7610_6913)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.08 3.12988C7.24163 3.12988 4.13 6.2415 4.13 10.0799C4.13 13.9183 7.24163 17.0299 11.08 17.0299C12.729 17.0299 14.2439 16.4556 15.4356 15.4961L20.5897 20.6502C20.8826 20.9431 21.3574 20.9431 21.6503 20.6502C21.9432 20.3573 21.9432 19.8824 21.6503 19.5895L16.4962 14.4354C17.4557 13.2438 18.03 11.7289 18.03 10.0799C18.03 6.2415 14.9184 3.12988 11.08 3.12988ZM5.63 10.0799C5.63 7.06993 8.07005 4.62988 11.08 4.62988C14.09 4.62988 16.53 7.06993 16.53 10.0799C16.53 13.0898 14.09 15.5299 11.08 15.5299C8.07005 15.5299 5.63 13.0898 5.63 10.0799Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_7610_6913"
          x="-3"
          y="0"
          width="32"
          height="32"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_7610_6913"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_7610_6913"
            result="shape"
          />
        </filter>
      </defs>
    </Icon>
  );
};
