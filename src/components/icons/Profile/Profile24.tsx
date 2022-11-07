import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconProfile24: FC<IIconProps> = ({
	size = 24,
	color = 'currentColor',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<g clipPath='url(#clip0_1362_56844)'>
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
		</g>
		<defs>
			<clipPath id='clip0_1362_56844'>
				<rect width={size} height={size} fill='white' />
			</clipPath>
		</defs>
	</svg>
);
