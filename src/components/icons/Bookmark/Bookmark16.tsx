import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconBookmark16: FC<IIconProps> = ({
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
			d='M12.2457 14.8993L8 10.6536L3.75429 14.8993V2.16214C3.75429 1.88062 3.86612 1.61065 4.06517 1.41159C4.26423 1.21254 4.5342 1.10071 4.81572 1.10071H11.1843C11.4658 1.10071 11.7358 1.21254 11.9348 1.41159C12.1338 1.61065 12.2457 1.88062 12.2457 2.16214V14.8993Z'
			stroke={color}
			strokeWidth='1.71'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
