import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconIncrease16: FC<IIconProps> = ({
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
			d='M15.3333 4L8.99999 10.3333L5.66666 7L0.666656 12'
			stroke='#24262E'
			stroke-linecap='round'
			stroke-linejoin='round'
		/>
		<path
			d='M11.3333 4H15.3333V8'
			stroke='#24262E'
			stroke-linecap='round'
			stroke-linejoin='round'
		/>
	</svg>
);
