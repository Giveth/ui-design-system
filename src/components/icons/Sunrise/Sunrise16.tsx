import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconSunrise16: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<g clipPath='url(#clip0_722_53035)'>
			<path
				d='M11.3333 12C11.3333 11.1159 10.9821 10.2681 10.357 9.64297C9.73189 9.01785 8.88404 8.66666 7.99999 8.66666C7.11593 8.66666 6.26809 9.01785 5.64297 9.64297C5.01785 10.2681 4.66666 11.1159 4.66666 12M7.99999 1.33333V5.99999M7.99999 1.33333L5.33332 3.99999M7.99999 1.33333L10.6667 3.99999M2.81332 6.81334L3.75999 7.76M0.666656 12H1.99999M14 12H15.3333M12.24 7.76L13.1867 6.81334M15.3333 14.6667H0.666656'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</g>
		<defs>
			<clipPath id='clip0_722_53035'>
				<rect width={size} height={size} fill='white' />
			</clipPath>
		</defs>
	</svg>
);
