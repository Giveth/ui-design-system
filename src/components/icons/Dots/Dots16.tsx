import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconDots16: FC<IIconProps> = ({
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
			d='M9.25 3.25C9.25 2.55964 8.69036 2 8 2C7.30964 2 6.75 2.55964 6.75 3.25C6.75 3.94036 7.30964 4.5 8 4.5C8.69036 4.5 9.25 3.94036 9.25 3.25Z'
			fill={color}
			stroke={color}
			strokeMiterlimit='10'
		/>
		<path
			d='M9.25 8C9.25 7.30964 8.69036 6.75 8 6.75C7.30964 6.75 6.75 7.30964 6.75 8C6.75 8.69036 7.30964 9.25 8 9.25C8.69036 9.25 9.25 8.69036 9.25 8Z'
			fill={color}
			stroke={color}
			strokeMiterlimit='10'
		/>
		<path
			d='M9.25 12.75C9.25 12.0596 8.69036 11.5 8 11.5C7.30964 11.5 6.75 12.0596 6.75 12.75C6.75 13.4404 7.30964 14 8 14C8.69036 14 9.25 13.4404 9.25 12.75Z'
			fill={color}
			stroke={color}
			strokeMiterlimit='10'
		/>
	</svg>
);
