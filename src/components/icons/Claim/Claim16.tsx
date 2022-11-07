import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconClaim16: FC<IIconProps> = ({
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
		<g clipPath='url(#clip0_3495_63351)'>
			<path
				d='M4 10C4 10 4.66667 9.33333 6.66667 9.33333C8.66667 9.33333 10 10.6667 12 10.6667C14 10.6667 14.6667 10 14.6667 10V2C14.6667 2 14 2.66667 12 2.66667C10 2.66667 8.66667 1.33333 6.66667 1.33333C4.66667 1.33333 4 2 4 2V10ZM4 10V14.6667M7 15H1'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</g>
		<defs>
			<clipPath id='clip0_3495_63351'>
				<rect width={size} height={size} fill='white' />
			</clipPath>
		</defs>
	</svg>
);
