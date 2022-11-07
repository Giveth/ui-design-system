import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconWalletApprove32: FC<IIconProps> = ({
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
			d='M29 16V12C29 10.3431 27.6569 9 26 9H6C4.34315 9 3 10.3431 3 12V24C3 25.6569 4.34315 27 6 27H16M29.3334 20L22 27.3333L18.6667 24'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M25.71 8.99999V7.125C25.7099 6.66513 25.6082 6.21096 25.4123 5.79489C25.2164 5.37883 24.9311 5.01112 24.5768 4.71802C24.2224 4.42491 23.8077 4.21362 23.3623 4.09923C22.9169 3.98484 22.4517 3.97016 22 4.05625L5.54 6.86562C4.8252 7.00184 4.18035 7.38323 3.71665 7.94402C3.25296 8.50481 2.99951 9.20983 3 9.93749V13'
			stroke={color}
			strokeWidth='2'
			strokeLinejoin='round'
		/>
		<line
			x1='8.5'
			y1='14.5'
			x2='23.5'
			y2='14.5'
			stroke={color}
			strokeLinecap='round'
		/>
		<line
			x1='8.5'
			y1='17.5'
			x2='23.5'
			y2='17.5'
			stroke={color}
			strokeLinecap='round'
		/>
		<line
			x1='8.5'
			y1='20.5'
			x2='15.5'
			y2='20.5'
			stroke={color}
			strokeLinecap='round'
		/>
	</svg>
);
