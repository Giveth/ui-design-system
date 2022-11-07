import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconBackward32: FC<IIconProps> = ({
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
			d='M7 10L3 14L7 18M4 14H22.375C26.0475 14 29 17.0831 29 20.75V22'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
