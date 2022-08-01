import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconDonation24: FC<IIconProps> = ({
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
		<path
			d='M15.907 6.13953H16.3256C19.6393 6.13953 22.3256 8.82582 22.3256 12.1395V20.4419C22.3256 22.0987 20.9825 23.4419 19.3256 23.4419H4.67444C3.01758 23.4419 1.67444 22.0987 1.67444 20.4419V12.1395C1.67444 8.82582 4.36073 6.13953 7.67444 6.13953H8.79072'
			stroke={color}
			strokeLinecap='round'
		/>
		<path
			d='M2.17444 14.4884C2.17444 12.0031 4.18916 9.98837 6.67444 9.98837H17.3256C19.8109 9.98837 21.8256 12.0031 21.8256 14.4884V20.4419C21.8256 21.8226 20.7063 22.9419 19.3256 22.9419H4.67444C3.29372 22.9419 2.17444 21.8226 2.17444 20.4419V14.4884Z'
			stroke={color}
		/>
		<g clipPath='url(#clip0_1261_54938)'>
			<path
				d='M15.2093 3.90698C15.2093 2.28925 13.8968 0.976746 12.279 0.976746C10.6613 0.976746 9.34882 2.28925 9.34882 3.90698C9.34882 5.52471 10.6613 6.83721 12.279 6.83721C13.8968 6.83721 15.2093 5.52471 15.2093 3.90698Z'
				stroke={color}
				strokeWidth='0.75'
				strokeMiterlimit='10'
			/>
			<g clipPath='url(#clip1_1261_54938)'>
				<path
					d='M12.2791 2.41469V5.39918'
					stroke={color}
					strokeWidth='0.4'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M12.9573 2.95726H11.9399C11.814 2.95726 11.6932 3.00728 11.6042 3.09633C11.5151 3.18537 11.4651 3.30614 11.4651 3.43207C11.4651 3.55799 11.5151 3.67876 11.6042 3.76781C11.6932 3.85685 11.814 3.90687 11.9399 3.90687H12.6182C12.7441 3.90687 12.8649 3.9569 12.9539 4.04594C13.043 4.13498 13.093 4.25575 13.093 4.38168C13.093 4.50761 13.043 4.62837 12.9539 4.71742C12.8649 4.80646 12.7441 4.85649 12.6182 4.85649H11.4651'
					stroke={color}
					strokeWidth='0.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
		</g>
		<g clipPath='url(#clip2_1261_54938)'>
			<path
				d='M13.9695 13.1163C12.8372 13.1163 12.2791 14.2325 12.2791 14.2325C12.2791 14.2325 11.7209 13.1163 10.5886 13.1163C9.66837 13.1163 8.93965 13.8861 8.93023 14.8048C8.91105 16.7117 10.443 18.0678 12.1221 19.2075C12.1684 19.239 12.2231 19.2558 12.2791 19.2558C12.3351 19.2558 12.3898 19.239 12.436 19.2075C14.115 18.0678 15.6469 16.7117 15.6279 14.8048C15.6185 13.8861 14.8898 13.1163 13.9695 13.1163V13.1163Z'
				stroke={color}
				strokeWidth='0.75'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</g>
		<line
			x1='9.78834'
			y1='8.0721'
			x2='14.7697'
			y2='8.0721'
			stroke={color}
			strokeWidth='0.6'
			strokeLinecap='round'
		/>
		<defs>
			<clipPath id='clip0_1261_54938'>
				<rect
					width='7.81395'
					height='7.81395'
					fill='white'
					transform='translate(8.37207)'
				/>
			</clipPath>
			<clipPath id='clip1_1261_54938'>
				<rect
					width='3.25581'
					height='3.25581'
					fill='white'
					transform='translate(10.6511 2.27902)'
				/>
			</clipPath>
			<clipPath id='clip2_1261_54938'>
				<rect
					width='8.93023'
					height='8.93023'
					fill='white'
					transform='translate(7.81396 11.7209)'
				/>
			</clipPath>
		</defs>
	</svg>
);
