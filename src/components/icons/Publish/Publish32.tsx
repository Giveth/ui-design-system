import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconPublish32: FC<IIconProps> = ({
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
			d='M24.5 22H27C27.663 22 28.2989 21.7366 28.7678 21.2678C29.2366 20.7989 29.5 20.163 29.5 19.5V6.5C29.5 5.83696 29.2366 5.20107 28.7678 4.73223C28.2989 4.26339 27.663 4 27 4H5C4.33696 4 3.70107 4.26339 3.23223 4.73223C2.76339 5.20107 2.5 5.83696 2.5 6.5V19.5C2.5 20.163 2.76339 20.7989 3.23223 21.2678C3.70107 21.7366 4.33696 22 5 22H7.5M11 18L16 13L21 18M16 27V14'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
