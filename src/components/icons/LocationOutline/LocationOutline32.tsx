import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconLocationOutline32: FC<IIconProps> = ({
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
			d='M16 3C11.0312 3 7 6.83687 7 11.5625C7 17 13 25.6169 15.2031 28.5931C15.2946 28.7188 15.4144 28.821 15.5529 28.8915C15.6914 28.962 15.8446 28.9987 16 28.9987C16.1554 28.9987 16.3086 28.962 16.4471 28.8915C16.5856 28.821 16.7054 28.7188 16.7969 28.5931C19 25.6181 25 17.0044 25 11.5625C25 6.83687 20.9688 3 16 3Z'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15Z'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
