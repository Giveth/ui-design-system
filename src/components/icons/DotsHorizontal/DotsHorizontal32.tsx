import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconDotsHorizontal32: FC<IIconProps> = ({
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
			d='M6.5 13.5C5.11929 13.5 4 14.6193 4 16C4 17.3807 5.11929 18.5 6.5 18.5C7.88071 18.5 9 17.3807 9 16C9 14.6193 7.88071 13.5 6.5 13.5Z'
			fill={color}
		/>
		<path
			d='M16 13.5C14.6193 13.5 13.5 14.6193 13.5 16C13.5 17.3807 14.6193 18.5 16 18.5C17.3807 18.5 18.5 17.3807 18.5 16C18.5 14.6193 17.3807 13.5 16 13.5Z'
			fill={color}
		/>
		<path
			d='M25.5 13.5C24.1193 13.5 23 14.6193 23 16C23 17.3807 24.1193 18.5 25.5 18.5C26.8807 18.5 28 17.3807 28 16C28 14.6193 26.8807 13.5 25.5 13.5Z'
			fill={color}
		/>
		<path
			d='M6.5 13.5C5.11929 13.5 4 14.6193 4 16C4 17.3807 5.11929 18.5 6.5 18.5C7.88071 18.5 9 17.3807 9 16C9 14.6193 7.88071 13.5 6.5 13.5Z'
			stroke={color}
			strokeWidth='2'
			strokeMiterlimit='10'
		/>
		<path
			d='M16 13.5C14.6193 13.5 13.5 14.6193 13.5 16C13.5 17.3807 14.6193 18.5 16 18.5C17.3807 18.5 18.5 17.3807 18.5 16C18.5 14.6193 17.3807 13.5 16 13.5Z'
			stroke={color}
			strokeWidth='2'
			strokeMiterlimit='10'
		/>
		<path
			d='M25.5 13.5C24.1193 13.5 23 14.6193 23 16C23 17.3807 24.1193 18.5 25.5 18.5C26.8807 18.5 28 17.3807 28 16C28 14.6193 26.8807 13.5 25.5 13.5Z'
			stroke={color}
			strokeWidth='2'
			strokeMiterlimit='10'
		/>
	</svg>
);
