import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconNetwork32: FC<IIconProps> = ({
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
			d='M24.0458 16.942C26.8666 19.336 28.4354 21.4524 27.8939 22.4431C27.0386 24.0065 21.2441 22.1654 14.9518 18.3306C8.65947 14.4958 4.25119 10.1197 5.10601 8.55684C5.64076 7.57977 8.1046 7.93249 11.4137 9.27089'
			stroke={color}
			strokeWidth='2'
			strokeMiterlimit='10'
		/>
		<path
			d='M16.5 23C20.6421 23 24 19.6421 24 15.5C24 11.3579 20.6421 8 16.5 8C12.3579 8 9 11.3579 9 15.5C9 19.6421 12.3579 23 16.5 23Z'
			stroke={color}
			strokeWidth='2'
			strokeMiterlimit='10'
		/>
		<circle cx='16' cy='3' r='2' fill={color} />
		<circle cx='4.5' cy='23.5' r='3.5' fill={color} />
		<circle cx='19.5' cy='30.5' r='1.5' fill={color} />
	</svg>
);
