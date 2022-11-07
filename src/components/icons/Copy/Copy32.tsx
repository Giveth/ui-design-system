import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconCopy32: FC<IIconProps> = ({
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
			d='M6.66666 20H5.33332C4.62608 20 3.9478 19.7191 3.4477 19.219C2.94761 18.7189 2.66666 18.0406 2.66666 17.3334V5.33335C2.66666 4.62611 2.94761 3.94783 3.4477 3.44774C3.9478 2.94764 4.62608 2.66669 5.33332 2.66669H17.3333C18.0406 2.66669 18.7188 2.94764 19.2189 3.44774C19.719 3.94783 20 4.62611 20 5.33335V6.66669M14.6667 12H26.6667C28.1394 12 29.3333 13.1939 29.3333 14.6667V26.6667C29.3333 28.1394 28.1394 29.3334 26.6667 29.3334H14.6667C13.1939 29.3334 12 28.1394 12 26.6667V14.6667C12 13.1939 13.1939 12 14.6667 12Z'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
