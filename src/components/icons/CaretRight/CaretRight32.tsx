import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconCaretRight32: FC<IIconProps> = ({
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
			d='M11.8355 25.0001L22.1375 17.0372C22.3035 16.9088 22.4367 16.7496 22.528 16.5704C22.6194 16.3913 22.6666 16.1964 22.6666 15.9992C22.6666 15.802 22.6194 15.6072 22.528 15.428C22.4367 15.2488 22.3035 15.0896 22.1375 14.9613L11.8355 6.99831C10.8522 6.23836 9.33331 6.86843 9.33331 8.03627L9.33331 23.9645C9.33331 25.1323 10.8522 25.7624 11.8355 25.0001Z'
			fill={color}
		/>
	</svg>
);
