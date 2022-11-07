import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconArrowRightCircle16: FC<IIconProps> = ({
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
			d='M7.99996 5.33331L10.6666 7.99998M10.6666 7.99998L7.99996 10.6666M10.6666 7.99998L5.33329 7.99998M1.33329 7.99998C1.33329 11.6819 4.31806 14.6666 7.99996 14.6666C11.6819 14.6666 14.6666 11.6819 14.6666 7.99998C14.6666 4.31808 11.6819 1.33331 7.99996 1.33331C4.31806 1.33331 1.33329 4.31808 1.33329 7.99998Z'
			stroke={color}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
