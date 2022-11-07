import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconProfileCompleted24: FC<IIconProps> = ({
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
		<g clipPath='url(#clip0_3487_63199)'>
			<path
				d='M17 17V15.6667C17 14.9594 16.7366 14.2811 16.2678 13.781C15.7989 13.281 15.163 13 14.5 13H9.5C8.83696 13 8.20107 13.281 7.73223 13.781C7.26339 14.2811 7 14.9594 7 15.6667V17'
				stroke={color}
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M12 10C13.3807 10 14.5 8.88071 14.5 7.5C14.5 6.11929 13.3807 5 12 5C10.6193 5 9.5 6.11929 9.5 7.5C9.5 8.88071 10.6193 10 12 10Z'
				stroke={color}
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M19.276 20C21.5597 18.0106 23 15.0999 23 11.8571C23 5.86091 18.0751 1 12 1C5.92487 1 1 5.86091 1 11.8571C1 15.0999 2.44033 18.0106 4.72398 20'
				stroke={color}
				strokeWidth='1.5'
				strokeLinecap='round'
			/>
			<path
				d='M9 21L11 23L15 19'
				stroke={color}
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</g>
		<defs>
			<clipPath id='clip0_3487_63199'>
				<rect width={size} height={size} fill='white' />
			</clipPath>
		</defs>
	</svg>
);
