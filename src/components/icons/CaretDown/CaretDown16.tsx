import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconCaretDown16: FC<IIconProps> = ({
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
			d='M4.14279 6.126L7.55548 10.7619C7.61049 10.8366 7.67873 10.8965 7.75551 10.9376C7.8323 10.9787 7.91581 11 8.00032 11C8.08483 11 8.16835 10.9787 8.24513 10.9376C8.32191 10.8965 8.39015 10.8366 8.44516 10.7619L11.8579 6.126C12.1835 5.6835 11.9135 5 11.413 5H4.58665C4.08614 5 3.81612 5.6835 4.14279 6.126Z'
			fill={color}
		/>
	</svg>
);
