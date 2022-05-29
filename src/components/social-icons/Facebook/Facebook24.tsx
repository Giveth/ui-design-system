import React, { FC } from 'react';
import { ISocialIconProps } from '../type';

export const IconFacebook24: FC<ISocialIconProps> = ({
	size = 24,
	color = 'currentColor',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M18 3C18 2.44772 17.5523 2 17 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H8C7.44772 10 7 10.4477 7 11V13C7 13.5523 7.44772 14 8 14H10V21C10 21.5523 10.4477 22 11 22H13C13.5523 22 14 21.5523 14 21V14H16.2192C16.6781 14 17.0781 13.6877 17.1894 13.2425L17.6894 11.2425C17.8472 10.6114 17.3698 10 16.7192 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H17C17.5523 6 18 5.55228 18 5V3Z'
			fill={color}
		/>
	</svg>
);
