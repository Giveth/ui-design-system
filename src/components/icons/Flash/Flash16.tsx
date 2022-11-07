import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconFlash16: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<g clipPath='url(#clip0_413_49444)'>
			<path
				d='M13.6266 6.17999C13.6 6.12516 13.5582 6.07908 13.5062 6.04719C13.4543 6.01531 13.3943 5.99893 13.3333 5.99999H8.41331L9.65998 0.406652C9.68289 0.326951 9.67589 0.241624 9.64028 0.166728C9.60467 0.0918313 9.54292 0.0325308 9.46664 -1.42865e-05C9.39619 -0.0309651 9.31721 -0.0365888 9.24308 -0.0159313C9.16896 0.00472616 9.10426 0.0503925 9.05998 0.113319L2.39331 9.44665C2.36078 9.49862 2.34353 9.55868 2.34353 9.61999C2.34353 9.68129 2.36078 9.74136 2.39331 9.79332C2.41526 9.8497 2.45244 9.89888 2.5007 9.93537C2.54897 9.97186 2.60641 9.99423 2.66664 9.99999H7.58664L6.33998 15.5933C6.31706 15.673 6.32407 15.7583 6.35968 15.8332C6.39528 15.9081 6.45703 15.9674 6.53331 16C6.60412 16.0285 6.68236 16.0329 6.75589 16.0124C6.82942 15.9919 6.89413 15.9477 6.93998 15.8867L13.6066 6.55332C13.6478 6.50062 13.6718 6.43656 13.6753 6.3698C13.6789 6.30303 13.6619 6.23678 13.6266 6.17999Z'
				fill={color}
			/>
		</g>
		<defs>
			<clipPath id='clip0_413_49444'>
				<rect width={size} height={size} fill='white' />
			</clipPath>
		</defs>
	</svg>
);
