import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconArrowRight16: FC<IIconProps> = ({
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
			d='M2.99998 7.66667H12.3333M12.3333 7.66667L7.66665 12.3333M12.3333 7.66667L7.66665 3'
			stroke={color}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
