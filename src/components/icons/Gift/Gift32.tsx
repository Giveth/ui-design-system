import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconGift32: FC<IIconProps> = ({
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
			d='M26.6667 16V29.3333H5.33333V16'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M29.3333 9.33333H2.66667V16H29.3333V9.33333Z'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M16 29.3333V9.33333'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M16 9.33334H10C9.11595 9.33334 8.2681 8.98215 7.64298 8.35703C7.01786 7.73191 6.66667 6.88406 6.66667 6C6.66667 5.11595 7.01786 4.2681 7.64298 3.64298C8.2681 3.01786 9.11595 2.66667 10 2.66667C14.6667 2.66667 16 9.33334 16 9.33334Z'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M16 9.33334H22C22.8841 9.33334 23.7319 8.98215 24.357 8.35703C24.9821 7.73191 25.3333 6.88406 25.3333 6C25.3333 5.11595 24.9821 4.2681 24.357 3.64298C23.7319 3.01786 22.8841 2.66667 22 2.66667C17.3333 2.66667 16 9.33334 16 9.33334Z'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
