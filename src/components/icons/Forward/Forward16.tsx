import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconForward16: FC<IIconProps> = ({
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
			d='M12.5 5L14.5 7L12.5 9M14 7H4.8125C2.97625 7 1.5 8.54156 1.5 10.375V11'
			stroke={color}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
