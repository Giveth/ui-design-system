import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconBookmark32: FC<IIconProps> = ({
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
			d='M24.4914 29.7986L16 21.3071L7.50857 29.7986V4.32429C7.50857 3.76126 7.73224 3.22132 8.13033 2.8232C8.52846 2.42509 9.0684 2.20143 9.63143 2.20143H22.3686C22.9316 2.20143 23.4716 2.42509 23.8696 2.8232C24.2677 3.22132 24.4914 3.76126 24.4914 4.32429V29.7986Z'
			stroke={color}
			strokeWidth='1.71'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
