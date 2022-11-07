import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconCaretUp24: FC<IIconProps> = ({
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
			d='M5.24988 15.1233L11.2221 7.39686C11.3184 7.27239 11.4378 7.17247 11.5721 7.10397C11.7065 7.03547 11.8527 7 12.0006 7C12.1485 7 12.2946 7.03547 12.429 7.10397C12.5633 7.17247 12.6828 7.27239 12.779 7.39686L18.7512 15.1233C19.3212 15.8608 18.8487 17 17.9728 17H6.02663C5.15075 17 4.6782 15.8608 5.24988 15.1233Z'
			fill={color}
		/>
	</svg>
);
