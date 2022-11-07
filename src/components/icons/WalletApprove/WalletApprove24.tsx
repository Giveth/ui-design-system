import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconWalletApprove24: FC<IIconProps> = ({
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
			d='M21.75 12V9C21.75 7.75736 20.7426 6.75 19.5 6.75H4.5C3.25736 6.75 2.25 7.75736 2.25 9V18C2.25 19.2426 3.25736 20.25 4.5 20.25H12M22 15L16.5 20.5L14 18'
			stroke={color}
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M19.2825 6.74999V5.34374C19.2824 4.99884 19.2062 4.65821 19.0592 4.34616C18.9123 4.03411 18.6984 3.75833 18.4326 3.5385C18.1668 3.31867 17.8558 3.16021 17.5217 3.07441C17.1877 2.98862 16.8388 2.97762 16.5 3.04218L4.155 5.14921C3.6189 5.25137 3.13526 5.53742 2.78749 5.95801C2.43972 6.3786 2.24963 6.90737 2.25 7.45311V9.74998'
			stroke={color}
			strokeWidth='1.5'
			strokeLinejoin='round'
		/>
		<line
			x1='6.5'
			y1='10.75'
			x2='17.5'
			y2='10.75'
			stroke={color}
			strokeLinecap='round'
		/>
		<line
			x1='6.5'
			y1='13'
			x2='17.5'
			y2='13'
			stroke={color}
			strokeLinecap='round'
		/>
		<line
			x1='6.5'
			y1='15.25'
			x2='11.5'
			y2='15.25'
			stroke={color}
			strokeLinecap='round'
		/>
	</svg>
);
