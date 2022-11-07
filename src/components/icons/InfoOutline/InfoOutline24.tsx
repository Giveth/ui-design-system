import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconInfoOutline24: FC<IIconProps> = ({
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
			fillRule='evenodd'
			clipRule='evenodd'
			d='M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21.1667 12C21.1667 17.0967 17.0967 21.1667 12 21.1667C6.89111 21.1667 2.83333 17.0967 2.83333 12C2.83333 6.89111 6.89111 2.83333 12 2.83333C17.0967 2.83333 21.1667 6.89111 21.1667 12Z'
			fill={color}
		/>
		<line
			x1='12'
			y1='17.25'
			x2='12'
			y2='10.75'
			stroke={color}
			strokeWidth='1.5'
			strokeLinecap='round'
		/>
		<circle cx='12' cy='7.75' r='1.25' fill={color} />
	</svg>
);
