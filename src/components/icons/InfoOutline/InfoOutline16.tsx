import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconInfoOutline16: FC<IIconProps> = ({
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
			fillRule='evenodd'
			clipRule='evenodd'
			d='M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z'
			fill={color}
		/>
		<line
			x1='8'
			y1='12.5'
			x2='8'
			y2='6.5'
			stroke={color}
			strokeLinecap='round'
		/>
		<circle cx='8' cy='4' r='1' fill={color} />
	</svg>
);
