import React, { FC } from 'react';
import { IIconProps } from './type';

export const IconCheckbox: FC<IIconProps> = ({
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
				d='M11.3829 5.8216C11.5605 5.61015 11.533 5.29476 11.3216 5.11715C11.1102 4.93953 10.7948 4.96696 10.6171 5.1784L11.3829 5.8216ZM6.8 10.5L6.42835 10.8345C6.52517 10.9421 6.66384 11.0024 6.80854 10.9999C6.95324 10.9975 7.08977 10.9324 7.18285 10.8216L6.8 10.5ZM5.37165 8.16552C5.18692 7.96026 4.87077 7.94362 4.66552 8.12835C4.46026 8.31308 4.44362 8.62923 4.62835 8.83448L5.37165 8.16552ZM10.6171 5.1784L6.41715 10.1784L7.18285 10.8216L11.3829 5.8216L10.6171 5.1784ZM7.17165 10.1655L5.37165 8.16552L4.62835 8.83448L6.42835 10.8345L7.17165 10.1655ZM3.5 2.5H12.5V1.5H3.5V2.5ZM12.5 2.5C13.0523 2.5 13.5 2.94772 13.5 3.5H14.5C14.5 2.39543 13.6046 1.5 12.5 1.5V2.5ZM13.5 3.5V12.5H14.5V3.5H13.5ZM13.5 12.5C13.5 13.0523 13.0523 13.5 12.5 13.5V14.5C13.6046 14.5 14.5 13.6046 14.5 12.5H13.5ZM12.5 13.5H3.5V14.5H12.5V13.5ZM3.5 13.5C2.94772 13.5 2.5 13.0523 2.5 12.5H1.5C1.5 13.6046 2.39543 14.5 3.5 14.5V13.5ZM2.5 12.5V3.5H1.5V12.5H2.5ZM2.5 3.5C2.5 2.94772 2.94772 2.5 3.5 2.5V1.5C2.39543 1.5 1.5 2.39543 1.5 3.5H2.5Z'
				fill={color}
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
				d='M17.0743 8.73239C17.3407 8.41523 17.2996 7.94214 16.9824 7.67572C16.6652 7.4093 16.1921 7.45044 15.9257 7.76761L17.0743 8.73239ZM10.2 15.75L9.64253 16.2517C9.78775 16.4131 9.99576 16.5036 10.2128 16.4999C10.4299 16.4962 10.6347 16.3986 10.7743 16.2324L10.2 15.75ZM8.05747 12.2483C7.78038 11.9404 7.30616 11.9154 6.99828 12.1925C6.69039 12.4696 6.66544 12.9438 6.94253 13.2517L8.05747 12.2483ZM15.9257 7.76761L9.62572 15.2676L10.7743 16.2324L17.0743 8.73239L15.9257 7.76761ZM10.7575 15.2483L8.05747 12.2483L6.94253 13.2517L9.64253 16.2517L10.7575 15.2483ZM5.25 3.75H18.75V2.25H5.25V3.75ZM18.75 3.75C19.5784 3.75 20.25 4.42157 20.25 5.25H21.75C21.75 3.59315 20.4069 2.25 18.75 2.25V3.75ZM20.25 5.25V18.75H21.75V5.25H20.25ZM20.25 18.75C20.25 19.5784 19.5784 20.25 18.75 20.25V21.75C20.4069 21.75 21.75 20.4069 21.75 18.75H20.25ZM18.75 20.25H5.25V21.75H18.75V20.25ZM5.25 20.25C4.42157 20.25 3.75 19.5784 3.75 18.75H2.25C2.25 20.4069 3.59315 21.75 5.25 21.75V20.25ZM3.75 18.75V5.25H2.25V18.75H3.75ZM3.75 5.25C3.75 4.42157 4.42157 3.75 5.25 3.75V2.25C3.59315 2.25 2.25 3.59315 2.25 5.25H3.75Z'
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
				d='M22.7657 11.6432C23.1209 11.2203 23.0661 10.5895 22.6432 10.2343C22.2203 9.87907 21.5895 9.93392 21.2343 10.3568L22.7657 11.6432ZM13.6 21L12.8567 21.669C13.0503 21.8841 13.3277 22.0048 13.6171 21.9999C13.9065 21.9949 14.1795 21.8648 14.3657 21.6432L13.6 21ZM10.7433 16.331C10.3738 15.9205 9.74155 15.8872 9.33104 16.2567C8.92053 16.6262 8.88725 17.2585 9.25671 17.669L10.7433 16.331ZM21.2343 10.3568L12.8343 20.3568L14.3657 21.6432L22.7657 11.6432L21.2343 10.3568ZM14.3433 20.331L10.7433 16.331L9.25671 17.669L12.8567 21.669L14.3433 20.331ZM7 5H25V3H7V5ZM25 5C26.1046 5 27 5.89543 27 7H29C29 4.79086 27.2091 3 25 3V5ZM27 7V25H29V7H27ZM27 25C27 26.1046 26.1046 27 25 27V29C27.2091 29 29 27.2091 29 25H27ZM25 27H7V29H25V27ZM7 27C5.89543 27 5 26.1046 5 25H3C3 27.2091 4.79086 29 7 29V27ZM5 25V7H3V25H5ZM5 7C5 5.89543 5.89543 5 7 5V3C4.79086 3 3 4.79086 3 7H5Z'
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
		default:
			return size16;
	}
};
