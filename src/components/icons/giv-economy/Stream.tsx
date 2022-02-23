import React, { FC } from 'react';
import { brandColors } from '../../..';
import { IIconProps } from './type';

export const IconGIVStream: FC<IIconProps> = ({
	size = 16,
	color = brandColors.mustard[500],
}) => {
	const size16 = (
		<svg
			width='16'
			height='16'
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g clipPath='url(#clip0_413_49444)'>
				<path
					d='M13.6266 6.17999C13.6 6.12516 13.5582 6.07908 13.5062 6.04719C13.4543 6.01531 13.3943 5.99893 13.3333 5.99999H8.41331L9.65998 0.406652C9.68289 0.326951 9.67589 0.241624 9.64028 0.166728C9.60468 0.0918313 9.54292 0.0325308 9.46665 -1.42865e-05C9.3962 -0.0309651 9.31721 -0.0365888 9.24309 -0.0159313C9.16896 0.00472616 9.10427 0.0503925 9.05998 0.113319L2.39332 9.44665C2.36079 9.49862 2.34354 9.55868 2.34354 9.61999C2.34354 9.68129 2.36079 9.74136 2.39332 9.79332C2.41527 9.8497 2.45245 9.89888 2.50071 9.93537C2.54897 9.97186 2.60642 9.99423 2.66665 9.99999H7.58665L6.33998 15.5933C6.31707 15.673 6.32407 15.7583 6.35968 15.8332C6.39529 15.9081 6.45704 15.9674 6.53332 16C6.60412 16.0285 6.68236 16.0329 6.75589 16.0124C6.82942 15.9919 6.89413 15.9477 6.93998 15.8867L13.6066 6.55332C13.6478 6.50062 13.6718 6.43656 13.6753 6.3698C13.6789 6.30303 13.6619 6.23678 13.6266 6.17999Z'
					fill={color}
				/>
			</g>
			<defs>
				<clipPath id='clip0_413_49444'>
					<rect width='16' height='16' fill='white' />
				</clipPath>
			</defs>
		</svg>
	);
	const size24 = (
		<svg
			width='24'
			height='24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M19.31 9.648a.42.42 0 0 0-.386-.236h-6.457l1.636-7.341a.446.446 0 0 0-.547-.555.438.438 0 0 0-.24.17l-8.75 12.25a.429.429 0 0 0 0 .455.429.429 0 0 0 .358.271h6.458l-1.637 7.341a.446.446 0 0 0 .254.534.454.454 0 0 0 .534-.149l8.75-12.25a.429.429 0 0 0 .026-.49Z'
				fill={color}
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
				d='M26.3155 12.6634C26.2666 12.5628 26.19 12.4784 26.0948 12.4199C25.9995 12.3614 25.8895 12.3314 25.7777 12.3334H16.7577L19.0433 2.07891C19.0853 1.93279 19.0725 1.77636 19.0072 1.63905C18.9419 1.50174 18.8287 1.39302 18.6888 1.33335C18.5597 1.27661 18.4149 1.2663 18.279 1.30417C18.1431 1.34204 18.0245 1.42577 17.9433 1.54113L5.72107 18.6522C5.66143 18.7475 5.62981 18.8576 5.62981 18.97C5.62981 19.0824 5.66143 19.1925 5.72107 19.2878C5.76131 19.3912 5.82948 19.4813 5.91796 19.5482C6.00644 19.6151 6.11176 19.6561 6.22218 19.6667H15.2422L12.9566 29.9211C12.9146 30.0672 12.9275 30.2237 12.9927 30.361C13.058 30.4983 13.1712 30.607 13.3111 30.6667C13.4409 30.719 13.5843 30.7269 13.7191 30.6894C13.8539 30.6518 13.9726 30.5708 14.0566 30.4589L26.2788 13.3478C26.3543 13.2512 26.3982 13.1337 26.4048 13.0113C26.4113 12.8889 26.3802 12.7675 26.3155 12.6634Z'
				fill={color}
			/>
		</svg>
	);
	const size64 = (
		<svg
			width='64'
			height='64'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M51.49 25.729a1.12 1.12 0 0 0-1.026-.63h-17.22l4.364-19.577a1.19 1.19 0 0 0-.677-1.423 1.167 1.167 0 0 0-1.423.396L12.174 37.162a1.144 1.144 0 0 0 0 1.213 1.144 1.144 0 0 0 .957.724h17.22l-4.363 19.576a1.19 1.19 0 0 0 .676 1.424 1.213 1.213 0 0 0 1.424-.397L51.42 27.035a1.143 1.143 0 0 0 .07-1.306Z'
				fill={color}
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
		case '64':
			return size64;
		default:
			return size64;
	}
};