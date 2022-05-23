import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconUnlock16: FC<IIconProps> = ({
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
			d='M4.66667 7.33333V4.66666C4.66667 3.78261 5.01786 2.93476 5.64298 2.30964C6.2681 1.68452 7.11594 1.33333 8 1.33333C8.88405 1.33333 9.7319 1.68452 10.357 2.30964C10.6977 2.65033 10.957 3.05719 11.1225 3.5M3.33333 7.33333H12.6667C13.403 7.33333 14 7.93028 14 8.66666V13.3333C14 14.0697 13.403 14.6667 12.6667 14.6667H3.33333C2.59695 14.6667 2 14.0697 2 13.3333V8.66666C2 7.93028 2.59695 7.33333 3.33333 7.33333Z'
			stroke={color}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
