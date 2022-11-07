import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconProfile32: FC<IIconProps> = ({
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
		<g clipPath='url(#clip0_1362_56845)'>
			<path
				d='M22.6666 24V22.2222C22.6666 21.2792 22.3155 20.3749 21.6903 19.7081C21.0652 19.0413 20.2174 18.6667 19.3333 18.6667H12.6666C11.7826 18.6667 10.9347 19.0413 10.3096 19.7081C9.6845 20.3749 9.33331 21.2792 9.33331 22.2222V24'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M16 14.6667C17.841 14.6667 19.3334 13.1743 19.3334 11.3333C19.3334 9.49238 17.841 8 16 8C14.1591 8 12.6667 9.49238 12.6667 11.3333C12.6667 13.1743 14.1591 14.6667 16 14.6667Z'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<circle cx='16' cy='16' r='15' stroke={color} strokeWidth='2' />
		</g>
		<defs>
			<clipPath id='clip0_1362_56845'>
				<rect width={size} height={size} fill='white' />
			</clipPath>
		</defs>
	</svg>
);
