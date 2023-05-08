import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconIncrease32: FC<IIconProps> = ({
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
			d='M30.6667 8L18 20.6667L11.3333 14L1.33334 24'
			stroke='#24262E'
			stroke-width='2'
			stroke-linecap='round'
			stroke-linejoin='round'
		/>
		<path
			d='M22.6667 8H30.6667V16'
			stroke='#24262E'
			stroke-width='2'
			stroke-linecap='round'
			stroke-linejoin='round'
		/>
	</svg>
);
