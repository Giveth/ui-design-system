import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconLock16: FC<IIconProps> = ({
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
			d='M12.6667 7.33333H3.33333C2.59695 7.33333 2 7.93028 2 8.66666V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V8.66666C14 7.93028 13.403 7.33333 12.6667 7.33333Z'
			stroke={color}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66669 7.33333V4.66666C4.66669 3.78261 5.01788 2.93476 5.643 2.30964C6.26812 1.68452 7.11597 1.33333 8.00002 1.33333C8.88408 1.33333 9.73192 1.68452 10.357 2.30964C10.9822 2.93476 11.3334 3.78261 11.3334 4.66666V7.33333'
			stroke={color}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
