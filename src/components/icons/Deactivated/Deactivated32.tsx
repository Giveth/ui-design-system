import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconDeactivated32: FC<IIconProps> = ({
	size = 32,
	color = 'currentColor',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 32 32'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M25 16.3333V24.3333C25 25.0406 24.719 25.7189 24.219 26.219C23.7189 26.719 23.0406 27 22.3333 27H7.66667C6.95942 27 6.28115 26.719 5.78105 26.219C5.28095 25.7189 5 25.0406 5 24.3333V9.66667C5 8.95942 5.28095 8.28115 5.78105 7.78105C6.28115 7.28095 6.95942 7 7.66667 7H15.6667M30 2L24 8M24 8L18 14M24 8L18 2M24 8L30 14'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
