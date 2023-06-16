import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconWorld16: FC<IIconProps> = ({
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
			d='M8 1.5C4.41031 1.5 1.5 4.41031 1.5 8C1.5 11.5897 4.41031 14.5 8 14.5C11.5897 14.5 14.5 11.5897 14.5 8C14.5 4.41031 11.5897 1.5 8 1.5Z'
			stroke={color}
			strokeMiterlimit='10'
		/>
		<path
			d='M8 1.5C6.18531 1.5 4.47906 4.41031 4.47906 8C4.47906 11.5897 6.18531 14.5 8 14.5C9.81469 14.5 11.5209 11.5897 11.5209 8C11.5209 4.41031 9.81469 1.5 8 1.5Z'
			stroke={color}
			strokeMiterlimit='10'
		/>
		<path
			d='M3.66656 3.66656C4.86156 4.515 6.36594 5.02094 8 5.02094C9.63406 5.02094 11.1384 4.515 12.3334 3.66656M12.3334 12.3334C11.1384 11.485 9.63406 10.9791 8 10.9791C6.36594 10.9791 4.86156 11.485 3.66656 12.3334'
			stroke={color}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path d='M8 1.5V14.5M14.5 8H1.5' stroke={color} strokeMiterlimit='10' />
	</svg>
);
