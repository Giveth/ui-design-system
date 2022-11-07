import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconSunrise24: FC<IIconProps> = ({
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
			d='M17 18C17 16.6739 16.4732 15.4022 15.5355 14.4645C14.5979 13.5268 13.3261 13 12 13C10.6739 13 9.40215 13.5268 8.46447 14.4645C7.52678 15.4022 7 16.6739 7 18M12 1.99998V8.99998M12 1.99998L7.99998 5.99998M12 1.99998L16 5.99998M4.22 10.22L5.64 11.64M1 18H3M21 18H23M18.36 11.64L19.78 10.22M23 22H1'
			stroke={color}
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
