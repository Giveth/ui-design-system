import React, { FC } from 'react';
import { ISocialIconProps } from '../type';

export const IconXSocial18: FC<ISocialIconProps> = ({
	size = 18,
	color = 'currentColor',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 18 18'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M10.6674 7.61786L17.2208 0H15.6679L9.97752 6.61448L5.43265 0H0.190674L7.06342 10.0023L0.190674 17.9908H1.74372L7.75289 11.0056L12.5526 17.9908H17.7946L10.667 7.61786H10.6674ZM8.54028 10.0904L7.84393 9.09439L2.3033 1.16911H4.68869L9.16004 7.56506L9.8564 8.56106L15.6686 16.8748H13.2832L8.54028 10.0908V10.0904Z'
			fill={color}
		/>
	</svg>
);
