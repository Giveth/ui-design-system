import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconUnLockable16: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => (
	<svg
		width={size}
		height={size}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<g clipPath='url(#a)'>
			<path
				d='M3.333 14.667h9.334c.736 0 1.333-.597 1.333-1.334V8.667c0-.737-.597-1.334-1.333-1.334H11M2 14V8.667c0-.737.597-1.334 1.333-1.334h1.334m0 0V4.667a3.333 3.333 0 0 1 6.24-1.63m-6.24 4.296h4m6-6-14 14'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</g>
		<defs>
			<clipPath id='a'>
				<path fill='#fff' d='M0 0h16v16H0z' />
			</clipPath>
		</defs>
	</svg>
);
