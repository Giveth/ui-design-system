import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconUnArchive16: FC<IIconProps> = ({
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
		<path
			d='M2.5 4.75V12.75C2.50099 13.0812 2.633 13.3986 2.86721 13.6328C3.10142 13.867 3.41878 13.999 3.75 14H12.25C12.5812 13.999 12.8986 13.867 13.1328 13.6328C13.367 13.3986 13.499 13.0812 13.5 12.75V4.75'
			stroke={color}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.625 2H2.375C1.89175 2 1.5 2.39175 1.5 2.875V3.625C1.5 4.10825 1.89175 4.5 2.375 4.5H13.625C14.1082 4.5 14.5 4.10825 14.5 3.625V2.875C14.5 2.39175 14.1082 2 13.625 2Z'
			stroke={color}
			strokeLinejoin='round'
		/>
		<path
			d='M10 9L8 7L6 9M8 7.69094V11.5'
			stroke={color}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
