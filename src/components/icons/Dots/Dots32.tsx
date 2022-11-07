import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconDots32: FC<IIconProps> = ({
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
			d='M18.5 6.5C18.5 5.11929 17.3807 4 16 4C14.6193 4 13.5 5.11929 13.5 6.5C13.5 7.88071 14.6193 9 16 9C17.3807 9 18.5 7.88071 18.5 6.5Z'
			fill={color}
			stroke={color}
			strokeWidth='2'
			strokeMiterlimit='10'
		/>
		<path
			d='M18.5 16C18.5 14.6193 17.3807 13.5 16 13.5C14.6193 13.5 13.5 14.6193 13.5 16C13.5 17.3807 14.6193 18.5 16 18.5C17.3807 18.5 18.5 17.3807 18.5 16Z'
			fill={color}
			stroke={color}
			strokeWidth='2'
			strokeMiterlimit='10'
		/>
		<path
			d='M18.5 25.5C18.5 24.1193 17.3807 23 16 23C14.6193 23 13.5 24.1193 13.5 25.5C13.5 26.8807 14.6193 28 16 28C17.3807 28 18.5 26.8807 18.5 25.5Z'
			fill={color}
			stroke={color}
			strokeWidth='2'
			strokeMiterlimit='10'
		/>
	</svg>
);
