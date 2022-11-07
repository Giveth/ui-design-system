import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconArrowDownCircle16: FC<IIconProps> = ({
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
		<path
			d='M5.33331 7.99996L7.99998 10.6666M7.99998 10.6666L10.6666 7.99996M7.99998 10.6666L7.99998 5.33329M7.99998 1.33329C11.6819 1.33329 14.6666 4.31806 14.6666 7.99996C14.6666 11.6819 11.6819 14.6666 7.99998 14.6666C4.31808 14.6666 1.33331 11.6819 1.33331 7.99996C1.33331 4.31806 4.31808 1.33329 7.99998 1.33329Z'
			stroke={color}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
