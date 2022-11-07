import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconArrowRightCircle32: FC<IIconProps> = ({
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
			d='M16 10.6667L21.3333 16M21.3333 16L16 21.3334M21.3333 16H10.6666M2.66665 16C2.66665 23.3638 8.63618 29.3334 16 29.3334C23.3638 29.3334 29.3333 23.3638 29.3333 16C29.3333 8.63622 23.3638 2.66669 16 2.66669C8.63618 2.66669 2.66665 8.63622 2.66665 16Z'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
