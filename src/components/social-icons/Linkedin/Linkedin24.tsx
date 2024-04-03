import React, { FC } from 'react';
import { ISocialIconProps } from '../type';

export const IconLinkedin24: FC<ISocialIconProps> = ({
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
			d='M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V20C22 20.5523 21.5523 21 21 21H19C18.4477 21 18 20.5523 18 20V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V20C14 20.5523 13.5523 21 13 21H11C10.4477 21 10 20.5523 10 20V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z'
			fill={color}
		/>
		<path
			d='M5 9H3C2.44772 9 2 9.44772 2 10V20C2 20.5523 2.44772 21 3 21H5C5.55228 21 6 20.5523 6 20V10C6 9.44772 5.55228 9 5 9Z'
			fill={color}
		/>
		<path
			d='M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z'
			fill={color}
		/>
	</svg>
);