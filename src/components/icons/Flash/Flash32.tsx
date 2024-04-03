import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconFlash32: FC<IIconProps> = ({
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
			d='M26.3155 12.6634C26.2666 12.5628 26.19 12.4784 26.0948 12.4199C25.9995 12.3614 25.8895 12.3314 25.7777 12.3334H16.7577L19.0433 2.07891C19.0853 1.93279 19.0725 1.77636 19.0072 1.63905C18.9419 1.50174 18.8287 1.39302 18.6888 1.33335C18.5597 1.27661 18.4149 1.2663 18.279 1.30417C18.1431 1.34204 18.0245 1.42577 17.9433 1.54113L5.72107 18.6522C5.66144 18.7475 5.62981 18.8576 5.62981 18.97C5.62981 19.0824 5.66144 19.1925 5.72107 19.2878C5.76132 19.3912 5.82948 19.4813 5.91796 19.5482C6.00644 19.6151 6.11176 19.6561 6.22218 19.6667H15.2422L12.9566 29.9211C12.9146 30.0672 12.9275 30.2237 12.9927 30.361C13.058 30.4983 13.1712 30.607 13.3111 30.6667C13.4409 30.719 13.5843 30.7269 13.7191 30.6894C13.8539 30.6518 13.9726 30.5708 14.0566 30.4589L26.2788 13.3478C26.3543 13.2512 26.3982 13.1337 26.4048 13.0113C26.4113 12.8889 26.3802 12.7675 26.3155 12.6634Z'
			fill={color}
		/>
	</svg>
);