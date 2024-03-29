import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconOptions16: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M11.5 4H14M11.5 4C11.5 4.55228 11.0523 5 10.5 5C9.94772 5 9.5 4.55228 9.5 4M11.5 4C11.5 3.44772 11.0523 3 10.5 3C9.94772 3 9.5 3.44772 9.5 4M2 4H9.5M11.5 12H14M11.5 12C11.5 12.5523 11.0523 13 10.5 13C9.94772 13 9.5 12.5523 9.5 12M11.5 12C11.5 11.4477 11.0523 11 10.5 11C9.94772 11 9.5 11.4477 9.5 12M2 12H9.5M6.5 8H14M6.5 8C6.5 8.55228 6.05228 9 5.5 9C4.94772 9 4.5 8.55228 4.5 8M6.5 8C6.5 7.44772 6.05228 7 5.5 7C4.94772 7 4.5 7.44772 4.5 8M2 8H4.5'
			stroke={color}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
