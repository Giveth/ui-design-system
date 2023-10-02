import React, { FC } from 'react';
import { ISocialIconProps } from '../type';

export const IconXSocial24: FC<ISocialIconProps> = ({
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
		<g>
			<path
				d='M14.2232 10.1571L22.9612 0H20.8906L13.3034 8.81931L7.24357 0H0.254272L9.41793 13.3364L0.254272 23.9877H2.325L10.3372 14.6742L16.7369 23.9877H23.7262L14.2227 10.1571H14.2232ZM11.3871 13.4538L10.4586 12.1258L3.07111 1.55881H6.25163L12.2134 10.0867L13.1419 11.4147L20.8915 22.4998H17.711L11.3871 13.4544V13.4538Z'
				fill={color}
			/>
		</g>
		<defs>
			<clipPath id='clip0_345_41901'>
				<rect width='24' height='24' fill='white' />
			</clipPath>
		</defs>
	</svg>
);
