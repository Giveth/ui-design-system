import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconSignature32: FC<IIconProps> = ({
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
			d='M12 20L15.2667 6.46667L22.2667 5.06667L26.9333 9.73333L25.5333 16.7333L12 20ZM12 20L19.0803 12.9197M27.8667 10.6667L21.3333 4.13333L24.1333 1.33333L30.6667 7.86667L27.8667 10.6667ZM20.4 9.73333C21.4309 9.73333 22.2667 10.5691 22.2667 11.6C22.2667 12.6309 21.4309 13.4667 20.4 13.4667C19.3691 13.4667 18.5333 12.6309 18.5333 11.6C18.5333 10.5691 19.3691 9.73333 20.4 9.73333Z'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6667 21.3333C9.33332 19.1111 6.66657 17.3332 3.99984 19.3334C2.07692 20.7757 0.666548 26.6667 3.33322 27.3334C5.99988 28 10.6666 24 13.3332 24C15.9999 24 15.9999 30 13.3332 30C8.66658 30 10.2322 22.6999 14.6666 23.3333C19.3332 24 21.9999 29.3334 29.3333 28'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
		/>
	</svg>
);
