import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconLock32: FC<IIconProps> = ({
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
			d='M25.3333 14.6667H6.66667C5.19391 14.6667 4 15.8606 4 17.3333V26.6667C4 28.1394 5.19391 29.3333 6.66667 29.3333H25.3333C26.8061 29.3333 28 28.1394 28 26.6667V17.3333C28 15.8606 26.8061 14.6667 25.3333 14.6667Z'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.33331 14.6667V9.33332C9.33331 7.56521 10.0357 5.86952 11.2859 4.61928C12.5362 3.36904 14.2319 2.66666 16 2.66666C17.7681 2.66666 19.4638 3.36904 20.714 4.61928C21.9643 5.86952 22.6666 7.56521 22.6666 9.33332V14.6667'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
