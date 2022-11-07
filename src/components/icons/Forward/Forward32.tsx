import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconForward32: FC<IIconProps> = ({
	size = 32,
	color = 'currentColor',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 32 32'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M25 10L29 14L25 18M28 14H9.625C5.9525 14 3 17.0831 3 20.75V22'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
