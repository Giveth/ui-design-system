import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconNotificationOutline32: FC<IIconProps> = ({
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
			d='M18.3067 27C18.0723 27.4041 17.7358 27.7395 17.331 27.9727C16.9261 28.2059 16.4672 28.3286 16 28.3286C15.5328 28.3286 15.0739 28.2059 14.669 27.9727C14.2642 27.7395 13.9277 27.4041 13.6933 27M24 10.6667C24 8.54492 23.1571 6.51009 21.6569 5.0098C20.1566 3.50951 18.1217 2.66666 16 2.66666C13.8783 2.66666 11.8434 3.50951 10.3431 5.0098C8.84286 6.51009 8 8.54492 8 10.6667C8 20 4 22.6667 4 22.6667H28C28 22.6667 24 20 24 10.6667Z'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
