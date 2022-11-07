import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconCaretUp16: FC<IIconProps> = ({
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
			d='M4.14279 9.874L7.55548 5.23812C7.61049 5.16343 7.67873 5.10348 7.75551 5.06238C7.8323 5.02128 7.91581 5 8.00032 5C8.08483 5 8.16835 5.02128 8.24513 5.06238C8.32191 5.10348 8.39015 5.16343 8.44516 5.23812L11.8579 9.874C12.1835 10.3165 11.9135 11 11.413 11H4.58665C4.08614 11 3.81612 10.3165 4.14279 9.874Z'
			fill={color}
		/>
	</svg>
);
