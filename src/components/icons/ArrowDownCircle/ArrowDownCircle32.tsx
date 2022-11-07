import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconArrowDownCircle32: FC<IIconProps> = ({
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
			d='M10.6667 16L16 21.3333M16 21.3333L21.3334 16M16 21.3333V10.6666M16 2.66665C23.3638 2.66665 29.3334 8.63618 29.3334 16C29.3334 23.3638 23.3638 29.3333 16 29.3333C8.63622 29.3333 2.66669 23.3638 2.66669 16C2.66669 8.63618 8.63622 2.66665 16 2.66665Z'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
