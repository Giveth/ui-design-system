import React, { FC } from 'react';
import { IIconProps } from './type';

export const IconNetwork: FC<IIconProps> = ({
	size = 24,
	color = 'currentColor',
}) => {
	const size24 = (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M18.0343 12.7065C20.1499 14.502 21.3265 16.0893 20.9204 16.8323C20.279 18.0049 15.9331 16.624 11.2138 13.7479C6.4946 10.8718 3.18839 7.58981 3.82951 6.41763C4.23057 5.68483 6.07845 5.94937 8.56026 6.95317'
				stroke={color}
				strokeWidth='1.5'
				strokeMiterlimit='10'
			/>
			<path
				d='M12.375 17.25C15.4816 17.25 18 14.7316 18 11.625C18 8.5184 15.4816 6 12.375 6C9.2684 6 6.75 8.5184 6.75 11.625C6.75 14.7316 9.2684 17.25 12.375 17.25Z'
				stroke={color}
				strokeWidth='1.5'
				strokeMiterlimit='10'
			/>
			<circle cx='12' cy='2.25' r='1.5' fill={color} />
			<circle cx='3.5' cy='17.5' r='2.5' fill={color} />
			<circle cx='14.5' cy='22.75' r='1' fill={color} />
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
				d='M24.0458 16.942C26.8666 19.336 28.4354 21.4524 27.8939 22.4431C27.0386 24.0065 21.2441 22.1654 14.9518 18.3306C8.65947 14.4958 4.25119 10.1197 5.10601 8.55684C5.64076 7.57977 8.1046 7.93249 11.4137 9.27089'
				stroke={color}
				strokeWidth='2'
				strokeMiterlimit='10'
			/>
			<path
				d='M16.5 23C20.6421 23 24 19.6421 24 15.5C24 11.3579 20.6421 8 16.5 8C12.3579 8 9 11.3579 9 15.5C9 19.6421 12.3579 23 16.5 23Z'
				stroke={color}
				strokeWidth='2'
				strokeMiterlimit='10'
			/>
			<circle cx='16' cy='3' r='2' fill={color} />
			<circle cx='4.5' cy='23.5' r='3.5' fill={color} />
			<circle cx='19.5' cy='30.5' r='1.5' fill={color} />
		</svg>
	);

	switch (size.toString()) {
		case '24':
			return size24;
		case '32':
			return size32;
		default:
			return size24;
	}
};
