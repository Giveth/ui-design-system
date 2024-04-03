import React, { FC } from 'react';
import { ISocialIconProps } from './type';

export const IconFaracaster: FC<ISocialIconProps> = ({
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
				d='M2.74556 0.667969H13.0651V15.3425H11.5503V8.62063H11.5354C11.368 6.76286 9.80669 5.30702 7.90533 5.30702C6.00396 5.30702 4.44263 6.76286 4.27521 8.62063H4.26035V15.3425H2.74556V0.667969Z'
				fill={color}
			/>
			<path
				d='M0 2.75081L0.615385 4.83365H1.13609V13.2597C0.874658 13.2597 0.662722 13.4716 0.662722 13.7331V14.3011H0.568047C0.306611 14.3011 0.0946746 14.513 0.0946746 14.7745V15.3425H5.39645V14.7745C5.39645 14.513 5.18451 14.3011 4.92308 14.3011H4.8284V13.7331C4.8284 13.4716 4.61647 13.2597 4.35503 13.2597H3.78698V2.75081H0Z'
				fill={color}
			/>
			<path
				d='M11.645 13.2597C11.3835 13.2597 11.1716 13.4716 11.1716 13.7331V14.3011H11.0769C10.8155 14.3011 10.6035 14.513 10.6035 14.7745V15.3425H15.9053V14.7745C15.9053 14.513 15.6934 14.3011 15.432 14.3011H15.3373V13.7331C15.3373 13.4716 15.1253 13.2597 14.8639 13.2597V4.83365H15.3846L16 2.75081H12.213V13.2597H11.645Z'
				fill={color}
			/>
		</svg>
	);

	switch (size.toString()) {
		case '24':
			return size16;
		default:
			return size16;
	}
};