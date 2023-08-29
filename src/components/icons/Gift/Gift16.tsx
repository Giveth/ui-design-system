import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconGift16: FC<IIconProps> = ({ color = 'currentColor' }) => (
	<svg
		width='16'
		height='16'
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<g clipPath='url(#clip0_4673_63630)'>
			<path
				d='M13.3333 8V14.6667H2.66667V8'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M14.6667 4.66666H1.33333V7.99999H14.6667V4.66666Z'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M8 14.6667V4.66666'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M7.99999 4.66666H4.99999C4.55797 4.66666 4.13404 4.49107 3.82148 4.17851C3.50892 3.86595 3.33333 3.44202 3.33333 2.99999C3.33333 2.55797 3.50892 2.13404 3.82148 1.82148C4.13404 1.50892 4.55797 1.33333 4.99999 1.33333C7.33333 1.33333 7.99999 4.66666 7.99999 4.66666Z'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M8 4.66666H11C11.442 4.66666 11.866 4.49107 12.1785 4.17851C12.4911 3.86595 12.6667 3.44202 12.6667 2.99999C12.6667 2.55797 12.4911 2.13404 12.1785 1.82148C11.866 1.50892 11.442 1.33333 11 1.33333C8.66667 1.33333 8 4.66666 8 4.66666Z'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</g>
		<defs>
			<clipPath id='clip0_4673_63630'>
				<rect width='16' height='16' fill='white' />
			</clipPath>
		</defs>
	</svg>
);
