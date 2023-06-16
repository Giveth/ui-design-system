import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconWrongNetwork24: FC<IIconProps> = ({
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
		<g clipPath='url(#clip0_4351_64903)'>
			<path
				d='M18.0343 12.7065C20.1499 14.502 21.3265 16.0893 20.9204 16.8323C20.279 18.0049 15.9331 16.624 11.2138 13.7479C6.4946 10.8718 3.18839 7.58981 3.82951 6.41763C4.23057 5.68483 6.07845 5.94937 8.56026 6.95317'
				stroke={color}
				strokeWidth='1.5'
				strokeMiterlimit='10'
			/>
			<path
				d='M12.375 17.25C15.4816 17.25 18 14.7316 18 11.625C18 8.5184 15.4816 6 12.375 6C9.2684 6 6.75 8.5184 6.75 11.625C6.75 14.7316 9.2684 17.25 12.375 17.25Z'
				stroke={color}
				strokeWidth='1.5'
				strokeMiterlimit='10'
			/>
			<circle cx='12' cy='2.25' r='1.5' fill={color} />
			<circle cx='3.375' cy='17.625' r='2.625' fill={color} />
			<circle cx='14.625' cy='22.875' r='1.125' fill={color} />
			<circle
				cx='5.25'
				cy='18'
				r='6'
				fill={color}
				stroke='white'
				strokeWidth='1.5'
			/>
			<path
				d='M7.5 15.75L3 20.25M3 15.75L7.5 20.25'
				stroke='white'
				strokeLinecap='round'
			/>
		</g>
		<defs>
			<clipPath id='clip0_4351_64903'>
				<rect width={size} height={size} fill='white' />
			</clipPath>
		</defs>
	</svg>
);
