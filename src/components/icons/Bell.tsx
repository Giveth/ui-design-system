import React, { FC } from 'react';
import { IIconProps } from './type';

export const IconBell: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	const size16 = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M12 5.33331C12 4.27245 11.5786 3.25503 10.8284 2.50489C10.0783 1.75474 9.06087 1.33331 8 1.33331C6.93913 1.33331 5.92172 1.75474 5.17157 2.50489C4.42143 3.25503 4 4.27245 4 5.33331C4 9.99998 2 11.3333 2 11.3333H14C14 11.3333 12 9.99998 12 5.33331Z'
				fill={color}
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M9.15333 13.3333C9.03612 13.5354 8.86789 13.7031 8.66548 13.8197C8.46307 13.9363 8.23358 13.9976 8 13.9976C7.76641 13.9976 7.53692 13.9363 7.33451 13.8197C7.1321 13.7031 6.96387 13.5354 6.84666 13.3333'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);

	const size24 = (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z'
				fill={color}
				stroke={color}
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M13.73 20C13.5542 20.3031 13.3018 20.5547 12.9982 20.7295C12.6946 20.9044 12.3504 20.9965 12 20.9965C11.6496 20.9965 11.3054 20.9044 11.0018 20.7295C10.6982 20.5547 10.4458 20.3031 10.27 20'
				stroke={color}
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);

	const size32 = (
		<svg
			width='32'
			height='32'
			viewBox='0 0 32 32'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M24 10.6667C24 8.54496 23.1571 6.51012 21.6569 5.00983C20.1566 3.50954 18.1217 2.66669 16 2.66669C13.8783 2.66669 11.8434 3.50954 10.3431 5.00983C8.84285 6.51012 8 8.54496 8 10.6667C8 20 4 22.6667 4 22.6667H28C28 22.6667 24 20 24 10.6667Z'
				fill={color}
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M18.3067 26.6667C18.0723 27.0708 17.7358 27.4062 17.331 27.6394C16.9261 27.8726 16.4672 27.9953 16 27.9953C15.5328 27.9953 15.0739 27.8726 14.669 27.6394C14.2642 27.4062 13.9278 27.0708 13.6933 26.6667'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);

	switch (size.toString()) {
		case '16':
			return size16;
		case '24':
			return size24;
		case '32':
			return size32;
		default:
			return size16;
	}
};
