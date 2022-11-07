import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconInfoFilled32: FC<IIconProps> = ({
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
			fillRule='evenodd'
			clipRule='evenodd'
			d='M29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16ZM16 13C16.5523 13 17 13.4477 17 14V22C17 22.5523 16.5523 23 16 23C15.4477 23 15 22.5523 15 22V14C15 13.4477 15.4477 13 16 13ZM16 12C16.8284 12 17.5 11.3284 17.5 10.5C17.5 9.67157 16.8284 9 16 9C15.1716 9 14.5 9.67157 14.5 10.5C14.5 11.3284 15.1716 12 16 12Z'
			fill={color}
		/>
	</svg>
);
