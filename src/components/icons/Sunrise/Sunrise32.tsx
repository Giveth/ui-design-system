import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconSunrise32: FC<IIconProps> = ({
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
			d='M22.6667 24C22.6667 22.2319 21.9643 20.5362 20.7141 19.286C19.4638 18.0357 17.7682 17.3333 16 17.3333C14.2319 17.3333 12.5362 18.0357 11.286 19.286C10.0358 20.5362 9.33337 22.2319 9.33337 24M16 2.66666V12M16 2.66666L10.6667 7.99999M16 2.66666L21.3334 7.99999M5.62672 13.6267L7.52005 15.52M1.33337 24H4.00004M28 24H30.6667M24.48 15.52L26.3734 13.6267M30.6667 29.3333H1.33337'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
