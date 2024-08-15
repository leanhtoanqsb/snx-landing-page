import { Icon, type IconProps } from '@chakra-ui/react';

export const ViewOutlinedIcon = ({
  width = '20px',
  height = '20px',
  color = '#FEFEFF',
  ...props
}: IconProps) => {
  return (
    <Icon
      width={width}
      height={height}
      viewBox="0 0 20 21"
      fill="none"
      color={color}
      {...props}
    >
      <g id="Icon / Linear">
        <g id="Vector">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.2853 6.66354C5.65739 5.45565 7.57195 4.41602 9.97799 4.41602C12.3841 4.41602 14.2987 5.45572 15.6708 6.66367C17.0287 7.85593 17.9381 9.28231 18.3795 10.2835C18.3795 10.2835 18.3795 10.2836 18.3795 10.2835C18.5408 10.6492 18.5408 11.0606 18.3795 11.4262C18.3795 11.4263 18.3795 11.4262 18.3795 11.4262C17.9379 12.428 17.0283 13.8515 15.6711 15.0459C15.671 15.0459 15.6711 15.0459 15.6711 15.0459C14.2989 16.2539 12.3842 17.2937 9.97799 17.2937C7.57192 17.2937 5.65735 16.2541 4.28525 15.0462C2.92749 13.854 2.01756 12.4273 1.57859 11.4248C1.57882 11.4254 1.57905 11.4259 1.57929 11.4264L2.1511 11.1741L1.57859 11.4248C1.41804 11.0598 1.41814 10.6493 1.57888 10.2843C1.57878 10.2845 1.57898 10.284 1.57888 10.2843L2.1511 10.5356L1.57929 10.2833C1.57915 10.2836 1.57902 10.284 1.57888 10.2843C2.01798 9.28178 2.92782 7.85545 4.2853 6.66354ZM9.97799 5.66602C7.95404 5.66602 6.32127 6.53647 5.11093 7.60207L5.11028 7.60264C3.90221 8.66329 3.09608 9.93574 2.72362 10.7863L2.72292 10.7879C2.70336 10.8323 2.70336 10.8775 2.72292 10.9218L2.72362 10.9234C3.09608 11.774 3.90221 13.0465 5.11028 14.1071L5.11093 14.1077C6.32127 15.1733 7.95404 16.0437 9.97799 16.0437C12.0019 16.0437 13.6347 15.1733 14.845 14.1077C16.0538 13.044 16.8604 11.7734 17.2357 10.922C17.2553 10.8777 17.2554 10.8323 17.2358 10.7879C16.8603 9.93608 16.0536 8.66317 14.8457 7.60264L14.845 7.60207C13.6347 6.53647 12.0019 5.66602 9.97799 5.66602Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.99992 8.58268C8.73427 8.58268 7.70825 9.6087 7.70825 10.8743C7.70825 12.14 8.73427 13.166 9.99992 13.166C11.2656 13.166 12.2916 12.14 12.2916 10.8743C12.2916 9.6087 11.2656 8.58268 9.99992 8.58268ZM6.45825 10.8743C6.45825 8.91834 8.04391 7.33268 9.99992 7.33268C11.9559 7.33268 13.5416 8.91834 13.5416 10.8743C13.5416 12.8304 11.9559 14.416 9.99992 14.416C8.04391 14.416 6.45825 12.8304 6.45825 10.8743Z"
            fill="currentColor"
          />
        </g>
      </g>
    </Icon>
  );
};
