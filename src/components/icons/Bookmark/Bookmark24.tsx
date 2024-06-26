import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconBookmark24: FC<IIconProps> = ({
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
			d='M18.3686 22.3489L12 15.9804L5.63143 22.3489V3.24322C5.63143 2.82095 5.79918 2.41599 6.09775 2.1174C6.39634 1.81882 6.8013 1.65108 7.22357 1.65108H16.7764C17.1987 1.65108 17.6037 1.81882 17.9022 2.1174C18.2008 2.41599 18.3686 2.82095 18.3686 3.24322V22.3489Z'
			stroke={color}
			strokeWidth='1.71'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
