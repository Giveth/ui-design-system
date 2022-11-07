import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconHelpOutline32: FC<IIconProps> = ({
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
		<path
			d='M25.25 16C25.25 21.1086 21.1086 25.25 16 25.25C10.8914 25.25 6.75 21.1086 6.75 16C6.75 10.8914 10.8914 6.75 16 6.75C21.1086 6.75 25.25 10.8914 25.25 16Z'
			stroke='#B9A7FF'
			strokeWidth='1.5'
		/>
		<path
			d='M17.4262 16.0937L17.73 15.88C18.2475 15.52 18.6075 15.1937 18.81 14.9012C19.02 14.6087 19.125 14.26 19.125 13.855C19.125 13.555 19.0575 13.2775 18.9225 13.0225C18.7875 12.7675 18.6 12.5462 18.36 12.3587C18.1275 12.1712 17.8462 12.025 17.5162 11.92C17.1937 11.815 16.845 11.7625 16.47 11.7625C15.825 11.7625 15.2437 11.92 14.7262 12.235C14.4256 12.4162 14.1706 12.6366 13.9612 12.896C13.719 13.1961 13.886 13.6187 14.2417 13.7675C14.5714 13.9054 14.9413 13.7472 15.2066 13.5078C15.2865 13.4356 15.3739 13.3714 15.4687 13.315C15.7537 13.1425 16.0687 13.0562 16.4137 13.0562C16.7587 13.0562 17.0437 13.1425 17.2687 13.315C17.5012 13.48 17.6175 13.69 17.6175 13.945C17.6175 14.11 17.565 14.2675 17.46 14.4175C17.355 14.56 17.1862 14.7137 16.9537 14.8787L16.38 15.295C16.0275 15.5575 15.7875 15.8387 15.66 16.1387C15.5886 16.3068 15.5418 16.5091 15.5198 16.7455C15.4876 17.0921 15.7857 17.365 16.1338 17.365C16.5031 17.365 16.767 17.0462 16.9015 16.7022C16.9107 16.6786 16.9207 16.6558 16.9312 16.6337C17.0287 16.4387 17.1937 16.2587 17.4262 16.0937Z'
			fill={color}
		/>
		<path
			d='M16.8075 18.2987C16.635 18.1187 16.4212 18.0287 16.1662 18.0287C15.9187 18.0287 15.705 18.1187 15.525 18.2987C15.345 18.4787 15.255 18.6962 15.255 18.9512C15.255 19.1987 15.345 19.4125 15.525 19.5925C15.705 19.7725 15.9187 19.8625 16.1662 19.8625C16.4212 19.8625 16.635 19.7725 16.8075 19.5925C16.9875 19.4125 17.0775 19.1987 17.0775 18.9512C17.0775 18.6962 16.9875 18.4787 16.8075 18.2987Z'
			fill={color}
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M26 16C26 21.5228 21.5228 26 16 26C10.4772 26 6 21.5228 6 16C6 10.4772 10.4772 6 16 6C21.5228 6 26 10.4772 26 16ZM24.5 16C24.5 20.73 20.73 24.5 16 24.5C11.27 24.5 7.5 20.73 7.5 16C7.5 11.27 11.27 7.5 16 7.5C20.73 7.5 24.5 11.27 24.5 16Z'
			fill={color}
		/>
	</svg>
);