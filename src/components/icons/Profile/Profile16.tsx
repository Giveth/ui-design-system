import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconProfile16: FC<IIconProps> = ({
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
		<g clipPath='url(#clip0_3487_63184)'>
			<path
				d='M11.3334 12V11.1111C11.3334 10.6396 11.1578 10.1874 10.8452 9.85403C10.5326 9.52063 10.1087 9.33333 9.66669 9.33333H6.33335C5.89133 9.33333 5.4674 9.52063 5.15484 9.85403C4.84228 10.1874 4.66669 10.6396 4.66669 11.1111V12'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M7.99998 7.33333C8.92045 7.33333 9.66665 6.58714 9.66665 5.66667C9.66665 4.74619 8.92045 4 7.99998 4C7.07951 4 6.33331 4.74619 6.33331 5.66667C6.33331 6.58714 7.07951 7.33333 7.99998 7.33333Z'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<circle cx='8' cy='8' r='7.5' stroke={color} />
		</g>
		<defs>
			<clipPath id='clip0_3487_63184'>
				<rect width={size} height={size} fill='white' />
			</clipPath>
		</defs>
	</svg>
);
