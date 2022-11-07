import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconProfileCompleted16: FC<IIconProps> = ({
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
		<g clipPath='url(#clip0_3487_63200)'>
			<path
				d='M11.3333 11.3333V10.4444C11.3333 9.97295 11.1577 9.52077 10.8452 9.18737C10.5326 8.85397 10.1087 8.66667 9.66667 8.66667H6.33334C5.89131 8.66667 5.46739 8.85397 5.15483 9.18737C4.84227 9.52077 4.66667 9.97295 4.66667 10.4444V11.3333'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M7.99999 6.66667C8.92047 6.66667 9.66666 5.92048 9.66666 5C9.66666 4.07953 8.92047 3.33333 7.99999 3.33333C7.07952 3.33333 6.33333 4.07953 6.33333 5C6.33333 5.92048 7.07952 6.66667 7.99999 6.66667Z'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M12.8507 13.3333C14.3731 12.0071 15.3333 10.0666 15.3333 7.90476C15.3333 3.90727 12.0501 0.666666 8.00001 0.666666C3.94992 0.666666 0.666672 3.90727 0.666672 7.90476C0.666672 10.0666 1.62689 12.0071 3.14933 13.3333'
				stroke={color}
				strokeLinecap='round'
			/>
			<path
				d='M6 14L7.33333 15.3333L10 12.6667'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</g>
		<defs>
			<clipPath id='clip0_3487_63200'>
				<rect width={size} height={size} fill='white' />
			</clipPath>
		</defs>
	</svg>
);
