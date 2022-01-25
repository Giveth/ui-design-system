import React, { FC } from 'react';
import { brandColors } from '../../..';
import { IIconProps } from './type';

export const IconGIVStream: FC<IIconProps> = ({
	size = 16,
	color = brandColors.mustard[500],
}) => {
	const size24 = (
		<svg
			width='24'
			height='24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M19.31 9.648a.42.42 0 0 0-.386-.236h-6.457l1.636-7.341a.446.446 0 0 0-.547-.555.438.438 0 0 0-.24.17l-8.75 12.25a.429.429 0 0 0 0 .455.429.429 0 0 0 .358.271h6.458l-1.637 7.341a.446.446 0 0 0 .254.534.454.454 0 0 0 .534-.149l8.75-12.25a.429.429 0 0 0 .026-.49Z'
				fill={color}
			/>
		</svg>
	);
	const size64 = (
		<svg
			width='64'
			height='64'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M51.49 25.729a1.12 1.12 0 0 0-1.026-.63h-17.22l4.364-19.577a1.19 1.19 0 0 0-.677-1.423 1.167 1.167 0 0 0-1.423.396L12.174 37.162a1.144 1.144 0 0 0 0 1.213 1.144 1.144 0 0 0 .957.724h17.22l-4.363 19.576a1.19 1.19 0 0 0 .676 1.424 1.213 1.213 0 0 0 1.424-.397L51.42 27.035a1.143 1.143 0 0 0 .07-1.306Z'
				fill={color}
			/>
		</svg>
	);

	switch (size.toString()) {
		case '24':
			return size24;
		case '64':
			return size64;
		default:
			return size64;
	}
};
