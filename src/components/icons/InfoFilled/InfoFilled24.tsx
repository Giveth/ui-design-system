import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconInfoFilled24: FC<IIconProps> = ({
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
			fillRule='evenodd'
			clipRule='evenodd'
			d='M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM12 18C11.5858 18 11.25 17.6642 11.25 17.25V10.75C11.25 10.3358 11.5858 10 12 10C12.4142 10 12.75 10.3358 12.75 10.75V17.25C12.75 17.6642 12.4142 18 12 18ZM12 9C12.6904 9 13.25 8.44036 13.25 7.75C13.25 7.05964 12.6904 6.5 12 6.5C11.3096 6.5 10.75 7.05964 10.75 7.75C10.75 8.44036 11.3096 9 12 9Z'
			fill={color}
		/>
	</svg>
);
