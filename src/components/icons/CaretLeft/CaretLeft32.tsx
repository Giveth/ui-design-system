import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconCaretLeft32: FC<IIconProps> = ({
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
			d='M20.1645 25.0001L9.8625 17.0372C9.69654 16.9088 9.56332 16.7496 9.47198 16.5704C9.38065 16.3913 9.33335 16.1964 9.33335 15.9992C9.33335 15.802 9.38065 15.6072 9.47198 15.428C9.56332 15.2488 9.69654 15.0896 9.8625 14.9613L20.1645 6.99831C21.1478 6.23836 22.6667 6.86843 22.6667 8.03627V23.9645C22.6667 25.1323 21.1478 25.7624 20.1645 25.0001Z'
			fill={color}
		/>
	</svg>
);
