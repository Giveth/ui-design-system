import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconUnlock32: FC<IIconProps> = ({
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
			d='M9.33333 14.6667V9.33332C9.33333 7.56521 10.0357 5.86952 11.286 4.61928C12.5362 3.36904 14.2319 2.66666 16 2.66666C17.7681 2.66666 19.4638 3.36904 20.714 4.61928C21.5219 5.42709 22.101 6.42088 22.4096 7.5M6.66667 14.6667H25.3333C26.8061 14.6667 28 15.8606 28 17.3333V26.6667C28 28.1394 26.8061 29.3333 25.3333 29.3333H6.66667C5.19391 29.3333 4 28.1394 4 26.6667V17.3333C4 15.8606 5.19391 14.6667 6.66667 14.6667Z'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
