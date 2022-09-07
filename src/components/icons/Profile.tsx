import React, { FC } from 'react';
import { IIconProps } from './type';

export const IconProfile: FC<IIconProps> = ({
	size = 24,
	color = 'currentColor',
}) => {
	const size24 = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M17 18V16.6667C17 15.9594 16.7366 15.2811 16.2678 14.781C15.7989 14.281 15.163 14 14.5 14H9.5C8.83696 14 8.20107 14.281 7.73223 14.781C7.26339 15.2811 7 15.9594 7 16.6667V18'
				stroke={color}
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M12 11C13.3807 11 14.5 9.88071 14.5 8.5C14.5 7.11929 13.3807 6 12 6C10.6193 6 9.5 7.11929 9.5 8.5C9.5 9.88071 10.6193 11 12 11Z'
				stroke={color}
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<circle
				cx='12'
				cy='12'
				r='11.25'
				stroke={color}
				strokeWidth='1.5'
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
				d='M22.6667 24V22.2222C22.6667 21.2792 22.3155 20.3749 21.6904 19.7081C21.0652 19.0413 20.2174 18.6667 19.3333 18.6667H12.6667C11.7826 18.6667 10.9348 19.0413 10.3097 19.7081C9.68453 20.3749 9.33334 21.2792 9.33334 22.2222V24'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M16 14.6667C17.8409 14.6667 19.3333 13.1743 19.3333 11.3333C19.3333 9.49238 17.8409 8 16 8C14.159 8 12.6667 9.49238 12.6667 11.3333C12.6667 13.1743 14.159 14.6667 16 14.6667Z'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<circle cx='16' cy='16' r='15' stroke={color} strokeWidth='2' />
		</svg>
	);

	switch (size.toString()) {
		case '24':
			return size24;
		case '32':
			return size32;
		default:
			return size24;
	}
};
