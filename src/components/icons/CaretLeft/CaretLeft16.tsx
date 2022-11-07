import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconCaretLeft16: FC<IIconProps> = ({
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
			d='M9.874 11.8572L5.23812 8.44452C5.16343 8.38951 5.10348 8.32127 5.06238 8.24449C5.02128 8.1677 5 8.08419 5 7.99968C5 7.91517 5.02128 7.83165 5.06238 7.75487C5.10348 7.67809 5.16343 7.60985 5.23812 7.55484L9.874 4.14214C10.3165 3.81645 11 4.08648 11 4.58698V11.4134C11 11.9139 10.3165 12.1839 9.874 11.8572Z'
			fill={color}
		/>
	</svg>
);
