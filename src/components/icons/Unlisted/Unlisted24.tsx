import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconUnlisted24: FC<IIconProps> = ({
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
			d='M18.75 12.25V18.25C18.75 18.7804 18.5393 19.2891 18.1642 19.6642C17.7891 20.0393 17.2804 20.25 16.75 20.25H5.75C5.21957 20.25 4.71086 20.0393 4.33579 19.6642C3.96071 19.2891 3.75 18.7804 3.75 18.25V7.25C3.75 6.71957 3.96071 6.21086 4.33579 5.83579C4.71086 5.46071 5.21957 5.25 5.75 5.25H11.75M14.25 8.80701H22.864'
			stroke={color}
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
