import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconEdit32: FC<IIconProps> = ({
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
			d='M16 26.6667H28'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M22 4.66665C22.5304 4.13622 23.2499 3.83823 24 3.83823C24.3714 3.83823 24.7392 3.91139 25.0824 4.05353C25.4256 4.19567 25.7374 4.40401 26 4.66665C26.2626 4.9293 26.471 5.2411 26.6131 5.58426C26.7553 5.92742 26.8284 6.29522 26.8284 6.66665C26.8284 7.03809 26.7553 7.40589 26.6131 7.74905C26.471 8.09221 26.2626 8.40401 26 8.66665L9.33333 25.3333L4 26.6667L5.33333 21.3333L22 4.66665Z'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
