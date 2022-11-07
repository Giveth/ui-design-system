import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconCaretDown24: FC<IIconProps> = ({
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
			d='M5.24988 8.87667L11.2221 16.6031C11.3184 16.7276 11.4378 16.8275 11.5721 16.896C11.7065 16.9645 11.8527 17 12.0006 17C12.1485 17 12.2946 16.9645 12.429 16.896C12.5633 16.8275 12.6828 16.7276 12.779 16.6031L18.7512 8.87667C19.3212 8.13917 18.8487 7 17.9728 7H6.02663C5.15075 7 4.6782 8.13917 5.24988 8.87667Z'
			fill={color}
		/>
	</svg>
);
