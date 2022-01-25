import React, { FC } from 'react';
import { IIconProps } from './type';

export const IconArchive: FC<IIconProps> = ({
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
				d='M2.5 4.75V12.75C2.50099 13.0812 2.633 13.3986 2.86721 13.6328C3.10142 13.867 3.41878 13.999 3.75 14H12.25C12.5812 13.999 12.8986 13.867 13.1328 13.6328C13.367 13.3986 13.499 13.0812 13.5 12.75V4.75'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<line
				x1='6.75'
				y1='7.25'
				x2='9.25'
				y2='7.25'
				stroke={color}
				strokeWidth='1.5'
				strokeLinecap='round'
			/>
			<path
				d='M13.625 2H2.375C1.89175 2 1.5 2.39175 1.5 2.875V3.625C1.5 4.10825 1.89175 4.5 2.375 4.5H13.625C14.1082 4.5 14.5 4.10825 14.5 3.625V2.875C14.5 2.39175 14.1082 2 13.625 2Z'
				stroke={color}
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
				d='M3.75 7.125V19.125C3.75148 19.6218 3.9495 20.0979 4.30081 20.4492C4.65212 20.8005 5.12818 20.9985 5.625 21H18.375C18.8718 20.9985 19.3479 20.8005 19.6992 20.4492C20.0505 20.0979 20.2485 19.6218 20.25 19.125V7.125'
				stroke={color}
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<line
				x1='10'
				y1='11'
				x2='14'
				y2='11'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
			/>
			<path
				d='M20.4375 3H3.5625C2.83763 3 2.25 3.58763 2.25 4.3125V5.4375C2.25 6.16237 2.83763 6.75 3.5625 6.75H20.4375C21.1624 6.75 21.75 6.16237 21.75 5.4375V4.3125C21.75 3.58763 21.1624 3 20.4375 3Z'
				stroke={color}
				strokeWidth='1.5'
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
				d='M5 9.5V25.5C5.00198 26.1624 5.26601 26.7972 5.73442 27.2656C6.20283 27.734 6.83757 27.998 7.5 28H24.5C25.1624 27.998 25.7972 27.734 26.2656 27.2656C26.734 26.7972 26.998 26.1624 27 25.5V9.5'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<line
				x1='13.5'
				y1='14.5'
				x2='18.5'
				y2='14.5'
				stroke={color}
				strokeWidth='3'
				strokeLinecap='round'
			/>
			<path
				d='M27.25 4H4.75C3.7835 4 3 4.7835 3 5.75V7.25C3 8.2165 3.7835 9 4.75 9H27.25C28.2165 9 29 8.2165 29 7.25V5.75C29 4.7835 28.2165 4 27.25 4Z'
				stroke={color}
				strokeWidth='2'
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
