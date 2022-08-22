import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconNotification32: FC<IIconProps> = ({
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
			d='M24 10.6667C24 8.54492 23.1571 6.51009 21.6569 5.0098C20.1566 3.50951 18.1217 2.66666 16 2.66666C13.8783 2.66666 11.8434 3.50951 10.3431 5.0098C8.84285 6.51009 8 8.54492 8 10.6667C8 20 4 22.6667 4 22.6667H28C28 22.6667 24 20 24 10.6667Z'
			fill={color}
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M18.3067 26.6667C18.0722 27.0708 17.7358 27.4062 17.331 27.6394C16.9261 27.8725 16.4672 27.9953 16 27.9953C15.5328 27.9953 15.0738 27.8725 14.669 27.6394C14.2642 27.4062 13.9277 27.0708 13.6933 26.6667'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
