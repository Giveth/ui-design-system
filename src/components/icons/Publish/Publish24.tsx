import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconPublish24: FC<IIconProps> = ({
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
			d='M18.375 16.5H20.25C20.7473 16.5 21.2242 16.3025 21.5758 15.9508C21.9275 15.5992 22.125 15.1223 22.125 14.625V4.875C22.125 4.37772 21.9275 3.90081 21.5758 3.54917C21.2242 3.19754 20.7473 3 20.25 3H3.75C3.25272 3 2.77581 3.19754 2.42417 3.54917C2.07254 3.90081 1.875 4.37772 1.875 4.875V14.625C1.875 15.1223 2.07254 15.5992 2.42417 15.9508C2.77581 16.3025 3.25272 16.5 3.75 16.5H5.625M8.25 13.5L12 9.75L15.75 13.5M12 20.25V10.5'
			stroke={color}
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
