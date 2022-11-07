import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconFile16: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M8.66669 1.33333H4.00002C3.6464 1.33333 3.30726 1.47381 3.05721 1.72386C2.80716 1.97391 2.66669 2.31305 2.66669 2.66667V13.3333C2.66669 13.687 2.80716 14.0261 3.05721 14.2761C3.30726 14.5262 3.6464 14.6667 4.00002 14.6667H12C12.3536 14.6667 12.6928 14.5262 12.9428 14.2761C13.1929 14.0261 13.3334 13.687 13.3334 13.3333V6M8.66669 1.33333L13.3334 6M8.66669 1.33333V6H13.3334'
			stroke={color}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
