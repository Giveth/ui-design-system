import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconCaretRight16: FC<IIconProps> = ({
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
			d='M6.126 11.8572L10.7619 8.44452C10.8366 8.38951 10.8965 8.32127 10.9376 8.24449C10.9787 8.1677 11 8.08419 11 7.99968C11 7.91517 10.9787 7.83165 10.9376 7.75487C10.8965 7.67809 10.8366 7.60985 10.7619 7.55484L6.126 4.14214C5.6835 3.81645 5 4.08648 5 4.58698L5 11.4134C5 11.9139 5.6835 12.1839 6.126 11.8572Z'
			fill={color}
		/>
	</svg>
);
