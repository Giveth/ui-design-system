import React, { FC } from 'react';
import { IIconProps } from './type';

export const IconSunrise: FC<IIconProps> = ({
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
				d='M11.3333 12C11.3333 11.1159 10.9821 10.2681 10.357 9.64297C9.73189 9.01785 8.88404 8.66666 7.99999 8.66666C7.11593 8.66666 6.26809 9.01785 5.64297 9.64297C5.01785 10.2681 4.66666 11.1159 4.66666 12M7.99999 1.33333V5.99999M7.99999 1.33333L5.33332 3.99999M7.99999 1.33333L10.6667 3.99999M2.81332 6.81334L3.75999 7.76M0.666656 12H1.99999M14 12H15.3333M12.24 7.76L13.1867 6.81334M15.3333 14.6667H0.666656'
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
				d='M17 18C17 16.6739 16.4732 15.4022 15.5355 14.4645C14.5979 13.5268 13.3261 13 12 13C10.6739 13 9.40215 13.5268 8.46447 14.4645C7.52678 15.4022 7 16.6739 7 18M12 1.99998V8.99998M12 1.99998L7.99998 5.99998M12 1.99998L16 5.99998M4.22 10.22L5.64 11.64M1 18H3M21 18H23M18.36 11.64L19.78 10.22M23 22H1'
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
				d='M22.6667 24C22.6667 22.2319 21.9643 20.5362 20.7141 19.286C19.4638 18.0357 17.7681 17.3333 16 17.3333C14.2319 17.3333 12.5362 18.0357 11.286 19.286C10.0357 20.5362 9.33334 22.2319 9.33334 24M16 2.66666V12M16 2.66666L10.6667 7.99999M16 2.66666L21.3333 7.99999M5.62669 13.6267L7.52002 15.52M1.33334 24H4.00001M28 24H30.6667M24.48 15.52L26.3733 13.6267M30.6667 29.3333H1.33334'
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
