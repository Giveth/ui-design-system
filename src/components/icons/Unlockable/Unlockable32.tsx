import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconUnlockable32: FC<IIconProps> = ({
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
			d='M6.66665 29.3333H25.3333C26.8061 29.3333 28 28.1394 28 26.6667V17.3333C28 15.8606 26.8061 14.6667 25.3333 14.6667H22M3.99998 28V17.3333C3.99998 15.8606 5.19389 14.6667 6.66665 14.6667H9.33331M9.33331 14.6667V9.33333C9.33331 7.56522 10.0357 5.86953 11.2859 4.61929C12.5362 3.36904 14.2319 2.66666 16 2.66666C17.7681 2.66666 19.4638 3.36904 20.714 4.61929C21.1498 5.05504 21.519 5.54491 21.8151 6.0731M9.33331 14.6667H17.3333M29.3333 2.66666L1.33331 30.6667'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
