import React, { FC } from 'react';
import { IIconProps } from './type';

export const IconImage: FC<IIconProps> = ({
	size = 24,
	color = 'currentColor',
}) => {
	const size16 = (
		<svg
			width='16'
			height='16'
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M5.66667 6.66667C6.21895 6.66667 6.66667 6.21896 6.66667 5.66667C6.66667 5.11439 6.21895 4.66667 5.66667 4.66667C5.11438 4.66667 4.66667 5.11439 4.66667 5.66667C4.66667 6.21896 5.11438 6.66667 5.66667 6.66667Z'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M14 10L10.6667 6.66667L3.33333 14'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
	const size24 = (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z'
				stroke={color}
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z'
				stroke={color}
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M21 15L16 10L5 21'
				stroke={color}
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);

	const size32 = (
		<svg
			width='32'
			height='32'
			viewBox='0 0 32 32'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M25.3333 4H6.66667C5.19391 4 4 5.19391 4 6.66667V25.3333C4 26.8061 5.19391 28 6.66667 28H25.3333C26.8061 28 28 26.8061 28 25.3333V6.66667C28 5.19391 26.8061 4 25.3333 4Z'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M11.3333 13.3333C12.4379 13.3333 13.3333 12.4379 13.3333 11.3333C13.3333 10.2288 12.4379 9.33334 11.3333 9.33334C10.2288 9.33334 9.33333 10.2288 9.33333 11.3333C9.33333 12.4379 10.2288 13.3333 11.3333 13.3333Z'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M28 20L21.3333 13.3333L6.66667 28'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);

	switch (size.toString()) {
		case '16':
			return size16;
		case '24':
			return size24;
		case '32':
			return size32;
		default:
			return size16;
	}
};
