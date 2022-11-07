import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconArrowLeft16: FC<IIconProps> = ({
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
			d='M12.3333 7.66667H3M3 7.66667L7.66667 12.3333M3 7.66667L7.66667 3'
			stroke={color}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
