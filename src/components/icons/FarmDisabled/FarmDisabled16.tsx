import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconFarmDisabled16: FC<IIconProps> = ({
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
		<path
			d='M7.37351 11.6224C7.3745 10.8686 7.61131 10.1331 8.05215 9.51472C8.49298 8.89635 9.11672 8.42475 9.83958 8.16326C10.5624 7.90177 11.3498 7.8629 12.0959 8.05189C12.842 8.24088 13.5111 8.64867 14.0133 9.22048C14.0496 9.26358 14.099 9.29424 14.1544 9.30802C14.2097 9.32179 14.2681 9.31796 14.321 9.29708C14.3736 9.27806 14.4189 9.24374 14.4509 9.19873C14.4829 9.15373 14.5001 9.10021 14.5 9.04539V8.06601C14.5 7.90734 14.5 7.65018 14.472 7.51887L13.9742 3.14173C13.9566 2.99951 13.8867 2.86839 13.7776 2.77278C13.6686 2.67716 13.5277 2.62356 13.3812 2.62195H9.1859C9.04592 2.62359 8.91002 2.66836 8.79755 2.74989C8.68507 2.83142 8.60174 2.94556 8.5594 3.07608L7.2952 7.53528H3.03273C2.89088 7.53592 2.75308 7.58162 2.64009 7.6655C2.52709 7.74938 2.44502 7.86689 2.40623 8.00035L1.89719 10.0084C1.88535 10.0576 1.88742 10.1091 1.90319 10.1573C1.91895 10.2055 1.94782 10.2486 1.98669 10.2819C2.02518 10.3168 2.07345 10.3396 2.12528 10.3474C2.17712 10.3552 2.23015 10.3476 2.27757 10.3257C2.60238 10.1953 2.95014 10.1284 3.30123 10.1287C4.00548 10.1287 4.68104 10.4016 5.18006 10.8877C5.67908 11.3737 5.96092 12.0334 5.96388 12.7222C5.96227 12.7585 5.9684 12.7948 5.98188 12.8287C5.99536 12.8626 6.0159 12.8934 6.04219 12.9192C6.09536 12.9677 6.16521 12.9951 6.23797 12.9958H7.23926C7.28244 12.9967 7.32523 12.9876 7.36413 12.9692C7.40304 12.9509 7.43696 12.9238 7.46314 12.8902C7.48931 12.8566 7.507 12.8174 7.51475 12.7759C7.52251 12.7343 7.52011 12.6915 7.50776 12.6511C7.41385 12.316 7.36866 11.9698 7.37351 11.6224ZM12.3184 5.7516C12.3177 5.80624 12.3003 5.85942 12.2684 5.90427C12.2365 5.94913 12.1915 5.98362 12.1394 6.00328L9.01249 7.22888C8.97731 7.2346 8.9414 7.2346 8.90621 7.22888C8.86221 7.22949 8.8187 7.21972 8.77937 7.2004C8.74004 7.18108 8.70604 7.15278 8.68025 7.1179C8.65446 7.08302 8.63764 7.04257 8.63121 6.99999C8.62478 6.9574 8.62893 6.91393 8.6433 6.87324L9.62781 3.86396C9.64546 3.80904 9.68037 3.76097 9.72758 3.72659C9.77478 3.69221 9.83187 3.67326 9.89072 3.67246H12.0387C12.1125 3.67386 12.1828 3.70313 12.2349 3.75414C12.2871 3.80514 12.317 3.87391 12.3184 3.94603V5.7516Z'
			fill={color}
		/>
		<path
			d='M3.31238 10.9435C2.95282 10.9446 2.60166 11.05 2.30331 11.2462C2.00497 11.4425 1.77283 11.721 1.63625 12.0463C1.49968 12.3716 1.4648 12.7293 1.53603 13.074C1.60727 13.4187 1.78141 13.7351 2.03644 13.983C2.29147 14.2309 2.61593 14.3993 2.9688 14.4668C3.32167 14.5344 3.68709 14.4981 4.01886 14.3625C4.35062 14.2269 4.63384 13.9981 4.83268 13.7051C5.03152 13.4121 5.13706 13.068 5.13596 12.7163C5.13596 12.4825 5.08871 12.2511 4.99693 12.0353C4.90516 11.8195 4.77065 11.6236 4.60117 11.4589C4.43169 11.2941 4.23057 11.1638 4.00939 11.0753C3.78821 10.9869 3.55133 10.9421 3.31238 10.9435ZM3.31238 13.4057C3.17409 13.4057 3.0389 13.3656 2.92391 13.2904C2.80893 13.2152 2.7193 13.1084 2.66638 12.9835C2.61346 12.8585 2.59961 12.721 2.62659 12.5883C2.65357 12.4556 2.72017 12.3338 2.81795 12.2381C2.91574 12.1425 3.04033 12.0773 3.17597 12.0509C3.31161 12.0246 3.4522 12.0381 3.57996 12.0899C3.70773 12.1416 3.81693 12.2293 3.89376 12.3418C3.9706 12.4542 4.0116 12.5865 4.0116 12.7217C4.01161 12.9022 3.93871 13.0753 3.80879 13.2034C3.67887 13.3315 3.50245 13.4042 3.31797 13.4057H3.31238Z'
			fill={color}
		/>
		<path
			d='M4.43114 2.59428H4.71083V4.28495C4.54807 4.34207 4.40715 4.44668 4.30711 4.58465C4.20708 4.72261 4.15274 4.88729 4.15145 5.05642V6.42428C4.15145 6.49683 4.18092 6.56642 4.23337 6.61772C4.28582 6.66903 4.35696 6.69785 4.43114 6.69785H6.10928C6.18346 6.69785 6.2546 6.66903 6.30705 6.61772C6.3595 6.56642 6.38897 6.49683 6.38897 6.42428V5.05642C6.3893 4.88691 6.3356 4.7215 6.23535 4.58323C6.13509 4.44496 5.99326 4.3407 5.82959 4.28495V2.04714C5.82959 1.90203 5.77065 1.76286 5.66575 1.66025C5.56085 1.55765 5.41857 1.5 5.27021 1.5H4.43114C4.28278 1.5 4.1405 1.55765 4.0356 1.66025C3.9307 1.76286 3.87176 1.90203 3.87176 2.04714C3.87176 2.19225 3.9307 2.33142 4.0356 2.43403C4.1405 2.53664 4.28278 2.59428 4.43114 2.59428Z'
			fill={color}
		/>
		<path
			d='M15 11.5L13.25 13.25M13.25 13.25L11.5 15M13.25 13.25L11.5 11.5M13.25 13.25L15 15'
			stroke={color}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.5333 10.2158C12.1664 9.77821 11.6157 9.5 11 9.5C9.89543 9.5 9 10.3954 9 11.5C9 12.1828 9.34212 12.7856 9.86427 13.1465'
			stroke={color}
			strokeWidth='1.5'
			strokeLinecap='round'
		/>
	</svg>
);