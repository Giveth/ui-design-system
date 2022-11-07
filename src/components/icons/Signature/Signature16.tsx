import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconSignature16: FC<IIconProps> = ({
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
		<g clipPath='url(#clip0_3785_63200)'>
			<path
				d='M6 10L7.63333 3.23333L11.1333 2.53333L13.4667 4.86667L12.7667 8.36667L6 10ZM6 10L9.54013 6.45987M13.9333 5.33333L10.6667 2.06667L12.0667 0.666667L15.3333 3.93333L13.9333 5.33333ZM10.2 4.86667C10.7155 4.86667 11.1333 5.28453 11.1333 5.8C11.1333 6.31547 10.7155 6.73333 10.2 6.73333C9.68453 6.73333 9.26667 6.31547 9.26667 5.8C9.26667 5.28453 9.68453 4.86667 10.2 4.86667Z'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M5.33336 10.6667C4.66669 9.55556 3.33331 8.66659 1.99995 9.66669C1.03849 10.3879 0.333305 13.3333 1.66664 13.6667C2.99997 14 5.33332 12 6.66666 12C7.99999 12 7.99999 15 6.66666 15C4.33332 15 5.11612 11.3499 7.33332 11.6667C9.66666 12 11 14.6667 14.6667 14'
				stroke={color}
				strokeLinecap='round'
			/>
		</g>
		<defs>
			<clipPath id='clip0_3785_63200'>
				<rect width={size} height={size} fill='white' />
			</clipPath>
		</defs>
	</svg>
);
