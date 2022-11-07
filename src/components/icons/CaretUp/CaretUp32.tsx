import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconCaretUp32: FC<IIconProps> = ({
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
			d='M6.99986 20.1644L14.9628 9.86247C15.0912 9.69651 15.2504 9.56329 15.4296 9.47195C15.6087 9.38061 15.8036 9.33332 16.0008 9.33332C16.198 9.33332 16.3928 9.38061 16.572 9.47195C16.7512 9.56329 16.9104 9.69651 17.0387 9.86247L25.0017 20.1644C25.7616 21.1478 25.1316 22.6667 23.9637 22.6667H8.03553C6.86769 22.6667 6.23763 21.1478 6.99986 20.1644Z'
			fill={color}
		/>
	</svg>
);
