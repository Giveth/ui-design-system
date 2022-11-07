import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconConfig32: FC<IIconProps> = ({
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
		<g clipPath='url(#clip0_3446_63170)'>
			<path
				d='M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7908 12 12 13.7909 12 16C12 18.2091 13.7908 20 16 20Z'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M25.8666 20C25.6892 20.4022 25.6362 20.8483 25.7146 21.2808C25.7931 21.7133 25.9993 22.1124 26.3066 22.4267L26.3866 22.5067C26.6346 22.7543 26.8313 23.0484 26.9655 23.3722C27.0997 23.6959 27.1687 24.0429 27.1687 24.3933C27.1687 24.7438 27.0997 25.0908 26.9655 25.4145C26.8313 25.7382 26.6346 26.0323 26.3866 26.28C26.139 26.5279 25.8449 26.7246 25.5212 26.8588C25.1974 26.993 24.8504 27.0621 24.5 27.0621C24.1495 27.0621 23.8025 26.993 23.4788 26.8588C23.1551 26.7246 22.861 26.5279 22.6133 26.28L22.5333 26.2C22.2191 25.8926 21.82 25.6864 21.3874 25.608C20.9549 25.5296 20.5088 25.5825 20.1066 25.76C19.7123 25.929 19.376 26.2097 19.1391 26.5674C18.9022 26.9251 18.775 27.3443 18.7733 27.7733V28C18.7733 28.7072 18.4924 29.3855 17.9923 29.8856C17.4922 30.3857 16.8139 30.6667 16.1066 30.6667C15.3994 30.6667 14.7211 30.3857 14.221 29.8856C13.7209 29.3855 13.44 28.7072 13.44 28V27.88C13.4297 27.4387 13.2868 27.0107 13.03 26.6516C12.7732 26.2925 12.4143 26.019 12 25.8667C11.5978 25.6892 11.1517 25.6362 10.7192 25.7147C10.2867 25.7931 9.88755 25.9993 9.57331 26.3067L9.49331 26.3867C9.24565 26.6346 8.95155 26.8313 8.62782 26.9655C8.30409 27.0997 7.95709 27.1688 7.60665 27.1688C7.25621 27.1688 6.9092 27.0997 6.58547 26.9655C6.26174 26.8313 5.96764 26.6346 5.71998 26.3867C5.47204 26.139 5.27535 25.8449 5.14115 25.5212C5.00696 25.1974 4.93788 24.8504 4.93788 24.5C4.93788 24.1496 5.00696 23.8026 5.14115 23.4788C5.27535 23.1551 5.47204 22.861 5.71998 22.6133L5.79998 22.5333C6.10736 22.2191 6.31356 21.82 6.39199 21.3875C6.47041 20.9549 6.41747 20.5088 6.23998 20.1067C6.07096 19.7123 5.79032 19.376 5.4326 19.1391C5.07488 18.9022 4.6557 18.775 4.22665 18.7733H3.99998C3.29274 18.7733 2.61446 18.4924 2.11436 17.9923C1.61426 17.4922 1.33331 16.8139 1.33331 16.1067C1.33331 15.3994 1.61426 14.7211 2.11436 14.2211C2.61446 13.721 3.29274 13.44 3.99998 13.44H4.11998C4.56131 13.4297 4.98932 13.2868 5.34838 13.03C5.70744 12.7732 5.98093 12.4143 6.13331 12C6.3108 11.5978 6.36374 11.1517 6.28532 10.7192C6.20689 10.2867 6.0007 9.88757 5.69331 9.57334L5.61331 9.49334C5.36538 9.24567 5.16869 8.95157 5.03449 8.62784C4.90029 8.30412 4.83122 7.95711 4.83122 7.60667C4.83122 7.25623 4.90029 6.90922 5.03449 6.58549C5.16869 6.26177 5.36538 5.96766 5.61331 5.72C5.86097 5.47207 6.15508 5.27537 6.47881 5.14118C6.80253 5.00698 7.14954 4.9379 7.49998 4.9379C7.85042 4.9379 8.19743 5.00698 8.52115 5.14118C8.84488 5.27537 9.13898 5.47207 9.38665 5.72L9.46665 5.8C9.78089 6.10739 10.18 6.31358 10.6125 6.39201C11.0451 6.47043 11.4912 6.41749 11.8933 6.24H12C12.3943 6.07099 12.7307 5.79034 12.9676 5.43262C13.2045 5.0749 13.3316 4.65572 13.3333 4.22667V4C13.3333 3.29276 13.6143 2.61448 14.1144 2.11438C14.6145 1.61429 15.2927 1.33334 16 1.33334C16.7072 1.33334 17.3855 1.61429 17.8856 2.11438C18.3857 2.61448 18.6666 3.29276 18.6666 4V4.12C18.6684 4.54905 18.7955 4.96824 19.0324 5.32596C19.2693 5.68368 19.6056 5.96432 20 6.13334C20.4021 6.31082 20.8482 6.36377 21.2808 6.28534C21.7133 6.20692 22.1124 6.00072 22.4266 5.69334L22.5066 5.61334C22.7543 5.3654 23.0484 5.16871 23.3721 5.03451C23.6959 4.90031 24.0429 4.83124 24.3933 4.83124C24.7438 4.83124 25.0908 4.90031 25.4145 5.03451C25.7382 5.16871 26.0323 5.3654 26.28 5.61334C26.5279 5.861 26.7246 6.1551 26.8588 6.47883C26.993 6.80256 27.0621 7.14956 27.0621 7.5C27.0621 7.85044 26.993 8.19745 26.8588 8.52118C26.7246 8.84491 26.5279 9.13901 26.28 9.38667L26.2 9.46667C25.8926 9.78091 25.6864 10.18 25.608 10.6126C25.5295 11.0451 25.5825 11.4912 25.76 11.8933V12C25.929 12.3944 26.2096 12.7307 26.5674 12.9676C26.9251 13.2045 27.3443 13.3316 27.7733 13.3333H28C28.7072 13.3333 29.3855 13.6143 29.8856 14.1144C30.3857 14.6145 30.6666 15.2928 30.6666 16C30.6666 16.7072 30.3857 17.3855 29.8856 17.8856C29.3855 18.3857 28.7072 18.6667 28 18.6667H27.88C27.4509 18.6684 27.0317 18.7955 26.674 19.0324C26.3163 19.2693 26.0357 19.6056 25.8666 20Z'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</g>
		<defs>
			<clipPath id='clip0_3446_63170'>
				<rect width={size} height={size} fill='white' />
			</clipPath>
		</defs>
	</svg>
);
