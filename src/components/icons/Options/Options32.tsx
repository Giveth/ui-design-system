import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconOptions32: FC<IIconProps> = ({
	size = 32,
	color = 'currentColor',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 26 22'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M20 3H25M20 3C20 4.10457 19.1046 5 18 5C16.8954 5 16 4.10457 16 3M20 3C20 1.89543 19.1046 1 18 1C16.8954 1 16 1.89543 16 3M1 3H16M20 19H25M20 19C20 20.1046 19.1046 21 18 21C16.8954 21 16 20.1046 16 19M20 19C20 17.8954 19.1046 17 18 17C16.8954 17 16 17.8954 16 19M1 19H16M10 11H25M10 11C10 12.1046 9.10457 13 8 13C6.89543 13 6 12.1046 6 11M10 11C10 9.89543 9.10457 9 8 9C6.89543 9 6 9.89543 6 11M1 11H6'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
