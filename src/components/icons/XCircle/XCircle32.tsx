import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconXCircle32: FC<IIconProps> = ({
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
			d='M20 12L12 20M12 12L20 20M29.3333 16C29.3333 23.3638 23.3638 29.3334 16 29.3334C8.6362 29.3334 2.66666 23.3638 2.66666 16C2.66666 8.63622 8.6362 2.66669 16 2.66669C23.3638 2.66669 29.3333 8.63622 29.3333 16Z'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
