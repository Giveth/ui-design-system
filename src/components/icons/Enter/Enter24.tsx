import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconEnter24: FC<IIconProps> = ({
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
		<path
			d='M17.25 3.75V13.997H4.5M4.5 13.997L8.25 17.747M4.5 13.997L8.25 10.247'
			stroke={color}
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
