import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconWorld24: FC<IIconProps> = ({
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
			d='M12 2.25C6.61547 2.25 2.25 6.61547 2.25 12C2.25 17.3845 6.61547 21.75 12 21.75C17.3845 21.75 21.75 17.3845 21.75 12C21.75 6.61547 17.3845 2.25 12 2.25Z'
			stroke={color}
			stroke-width='1.5'
			stroke-miterlimit='10'
		/>
		<path
			d='M12 2.25C9.27794 2.25 6.71857 6.61547 6.71857 12C6.71857 17.3845 9.27794 21.75 12 21.75C14.722 21.75 17.2814 17.3845 17.2814 12C17.2814 6.61547 14.722 2.25 12 2.25Z'
			stroke={color}
			stroke-width='1.5'
			stroke-miterlimit='10'
		/>
		<path
			d='M5.49982 5.49985C7.29232 6.7725 9.54888 7.53141 12 7.53141C14.4511 7.53141 16.7076 6.7725 18.5001 5.49985M18.5001 18.5002C16.7076 17.2275 14.4511 16.4686 12 16.4686C9.54888 16.4686 7.29232 17.2275 5.49982 18.5002'
			stroke={color}
			stroke-width='1.5'
			stroke-linecap='round'
			stroke-linejoin='round'
		/>
		<path
			d='M12 2.25V21.75M21.75 12H2.25'
			stroke={color}
			stroke-width='1.5'
			stroke-miterlimit='10'
		/>
	</svg>
);
