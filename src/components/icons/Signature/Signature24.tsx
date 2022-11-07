import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconSignature24: FC<IIconProps> = ({
	size = 24,
	color = 'currentColor',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<g clipPath='url(#clip0_3785_63199)'>
			<path
				d='M9 15L11.45 4.85L16.7 3.8L20.2 7.3L19.15 12.55L9 15ZM9 15L14.3102 9.6898M20.9 8L16 3.1L18.1 1L23 5.9L20.9 8ZM15.3 7.3C16.0732 7.3 16.7 7.9268 16.7 8.7C16.7 9.4732 16.0732 10.1 15.3 10.1C14.5268 10.1 13.9 9.4732 13.9 8.7C13.9 7.9268 14.5268 7.3 15.3 7.3Z'
				stroke={color}
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M8.00001 16C7.00001 14.3333 4.99994 12.9999 2.9999 14.5C1.5577 15.5818 0.499927 20 2.49993 20.5C4.49993 21 7.99995 18 9.99995 18C12 18 12 22.5 9.99995 22.5C6.49995 22.5 7.67415 17.0249 11 17.5C14.5 18 16.5 22 22 21'
				stroke={color}
				strokeWidth='1.5'
				strokeLinecap='round'
			/>
		</g>
		<defs>
			<clipPath id='clip0_3785_63199'>
				<rect width={size} height={size} fill='white' />
			</clipPath>
		</defs>
	</svg>
);
