import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconClaim32: FC<IIconProps> = ({
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
			d='M8 20C8 20 9.33333 18.6667 13.3333 18.6667C17.3333 18.6667 20 21.3333 24 21.3333C28 21.3333 29.3333 20 29.3333 20V4C29.3333 4 28 5.33333 24 5.33333C20 5.33333 17.3333 2.66666 13.3333 2.66666C9.33333 2.66666 8 4 8 4V20ZM8 20V29.3333M14 30H2'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
