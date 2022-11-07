import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconEyeOff32: FC<IIconProps> = ({
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
		<g clipPath='url(#clip0_3785_63246)'>
			<path
				d='M23.92 23.92C21.6408 25.6573 18.8655 26.6198 16 26.6667C6.66671 26.6667 1.33337 16 1.33337 16C2.99189 12.9092 5.29222 10.2088 8.08004 8.08M13.2 5.65333C14.1178 5.4385 15.0575 5.33112 16 5.33333C25.3334 5.33333 30.6667 16 30.6667 16C29.8573 17.5141 28.8921 18.9396 27.7867 20.2533M18.8267 18.8267C18.4605 19.2197 18.0189 19.5349 17.5282 19.7535C17.0376 19.9721 16.5079 20.0897 15.9708 20.0992C15.4337 20.1086 14.9003 20.0098 14.4022 19.8087C13.9041 19.6075 13.4517 19.308 13.0718 18.9282C12.692 18.5484 12.3926 18.0959 12.1914 17.5979C11.9902 17.0998 11.8914 16.5663 11.9009 16.0292C11.9104 15.4921 12.0279 14.9625 12.2465 14.4718C12.4652 13.9811 12.7804 13.5395 13.1734 13.1733'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M1.33337 1.33334L30.6667 30.6667'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</g>
		<defs>
			<clipPath id='clip0_3785_63246'>
				<rect width={size} height={size} fill='white' />
			</clipPath>
		</defs>
	</svg>
);
