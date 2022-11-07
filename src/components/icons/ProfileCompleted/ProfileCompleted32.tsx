import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconProfileCompleted32: FC<IIconProps> = ({
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
		<g clipPath='url(#clip0_3487_63198)'>
			<path
				d='M22.6667 22.6667V20.8889C22.6667 19.9459 22.3155 19.0415 21.6903 18.3747C21.0652 17.7079 20.2174 17.3333 19.3333 17.3333H12.6667C11.7826 17.3333 10.9348 17.7079 10.3096 18.3747C9.68452 19.0415 9.33333 19.9459 9.33333 20.8889V22.6667'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M16 13.3333C17.841 13.3333 19.3333 11.8409 19.3333 10C19.3333 8.15905 17.841 6.66666 16 6.66666C14.1591 6.66666 12.6667 8.15905 12.6667 10C12.6667 11.8409 14.1591 13.3333 16 13.3333Z'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M25.7014 26.6667C28.7462 24.0141 30.6667 20.1332 30.6667 15.8095C30.6667 7.81455 24.1002 1.33334 16 1.33334C7.89983 1.33334 1.33334 7.81455 1.33334 15.8095C1.33334 20.1332 3.25377 24.0141 6.29865 26.6667'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
			/>
			<path
				d='M12 28L14.6667 30.6667L20 25.3333'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</g>
		<defs>
			<clipPath id='clip0_3487_63198'>
				<rect width={size} height={size} fill='white' />
			</clipPath>
		</defs>
	</svg>
);
