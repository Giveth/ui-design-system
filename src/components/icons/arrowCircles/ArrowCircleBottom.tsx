import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconArrowCircleBottom: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	const size16 = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M5.33331 7.99996L7.99998 10.6666M7.99998 10.6666L10.6666 7.99996M7.99998 10.6666L7.99998 5.33329M7.99998 1.33329C11.6819 1.33329 14.6666 4.31806 14.6666 7.99996C14.6666 11.6819 11.6819 14.6666 7.99998 14.6666C4.31808 14.6666 1.33331 11.6819 1.33331 7.99996C1.33331 4.31806 4.31808 1.33329 7.99998 1.33329Z'
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
				d='M8 12L12 16M12 16L16 12M12 16V8M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2Z'
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
				d='M10.6667 16L16 21.3334M16 21.3334L21.3334 16M16 21.3334V10.6667M16 2.66671C23.3638 2.66671 29.3334 8.63624 29.3334 16C29.3334 23.3638 23.3638 29.3334 16 29.3334C8.63622 29.3334 2.66669 23.3638 2.66669 16C2.66669 8.63624 8.63622 2.66671 16 2.66671Z'
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
