import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconCaretDown32: FC<IIconProps> = ({
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
			d='M6.99986 11.8356L14.9628 22.1375C15.0912 22.3035 15.2504 22.4367 15.4296 22.528C15.6087 22.6194 15.8036 22.6667 16.0008 22.6667C16.198 22.6667 16.3928 22.6194 16.572 22.528C16.7512 22.4367 16.9104 22.3035 17.0387 22.1375L25.0017 11.8356C25.7616 10.8522 25.1316 9.33334 23.9637 9.33334H8.03553C6.86769 9.33334 6.23763 10.8522 6.99986 11.8356Z'
			fill={color}
		/>
	</svg>
);
