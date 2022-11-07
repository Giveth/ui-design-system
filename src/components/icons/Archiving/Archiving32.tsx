import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconArchiving32: FC<IIconProps> = ({
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
			d='M5 9.5V25.5C5.00198 26.1624 5.26601 26.7972 5.73442 27.2656C6.20283 27.734 6.83757 27.998 7.5 28H24.5C25.1624 27.998 25.7972 27.734 26.2656 27.2656C26.734 26.7972 26.998 26.1624 27 25.5V9.5'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M27.25 4H4.75C3.7835 4 3 4.7835 3 5.75V7.25C3 8.2165 3.7835 9 4.75 9H27.25C28.2165 9 29 8.2165 29 7.25V5.75C29 4.7835 28.2165 4 27.25 4Z'
			stroke={color}
			strokeWidth='2'
			strokeLinejoin='round'
		/>
		<path
			d='M20 19L16 23L12 19M16 21.6181V14'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
