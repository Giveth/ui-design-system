import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconUnlockable24: FC<IIconProps> = ({
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
			d='M5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11H16.5M3 21V13C3 11.8954 3.89543 11 5 11C5 11 11.0474 11 13 11M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C15.8624 3.79128 16.1393 4.15869 16.3613 4.55483'
			stroke={color}
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M22 2L1 23'
			stroke={color}
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
