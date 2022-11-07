import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconUnlockable16: FC<IIconProps> = ({
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
		<g clipPath='url(#clip0_3644_63211)'>
			<path
				d='M3.33335 14.6667H12.6667C13.4031 14.6667 14 14.0697 14 13.3333V8.66667C14 7.93029 13.4031 7.33333 12.6667 7.33333H11M2.00002 14V8.66667C2.00002 7.93029 2.59697 7.33333 3.33335 7.33333H4.66669M4.66669 7.33333V4.66667C4.66669 3.78261 5.01788 2.93477 5.643 2.30964C6.26812 1.68452 7.11597 1.33333 8.00002 1.33333C8.88408 1.33333 9.73192 1.68452 10.357 2.30964C10.5749 2.52752 10.7595 2.77246 10.9076 3.03655M4.66669 7.33333H8.66669M14.6667 1.33333L0.666687 15.3333'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</g>
		<defs>
			<clipPath id='clip0_3644_63211'>
				<rect width={size} height={size} fill='white' />
			</clipPath>
		</defs>
	</svg>
);
