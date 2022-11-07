import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconUnArchive24: FC<IIconProps> = ({
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
			d='M3.75 7.125V19.125C3.75148 19.6218 3.9495 20.0979 4.30081 20.4492C4.65212 20.8005 5.12818 20.9985 5.625 21H18.375C18.8718 20.9985 19.3479 20.8005 19.6992 20.4492C20.0505 20.0979 20.2485 19.6218 20.25 19.125V7.125'
			stroke={color}
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M20.4375 3H3.5625C2.83763 3 2.25 3.58763 2.25 4.3125V5.4375C2.25 6.16237 2.83763 6.75 3.5625 6.75H20.4375C21.1624 6.75 21.75 6.16237 21.75 5.4375V4.3125C21.75 3.58763 21.1624 3 20.4375 3Z'
			stroke={color}
			strokeWidth='1.5'
			strokeLinejoin='round'
		/>
		<path
			d='M15 13.5L12 10.5L9 13.5M12 11.5364V17.25'
			stroke={color}
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
