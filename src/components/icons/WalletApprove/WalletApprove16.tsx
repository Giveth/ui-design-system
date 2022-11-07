import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconWalletApprove16: FC<IIconProps> = ({
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
			d='M14.5 8V6C14.5 5.17157 13.8284 4.5 13 4.5H3C2.17157 4.5 1.5 5.17157 1.5 6V12C1.5 12.8284 2.17157 13.5 3 13.5H8M14.6667 10L11 13.6667L9.33334 12'
			stroke={color}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.855 4.5V3.5625C12.8549 3.33256 12.8041 3.10548 12.7062 2.89745C12.6082 2.68941 12.4656 2.50556 12.2884 2.35901C12.1112 2.21245 11.9039 2.10681 11.6812 2.04961C11.4585 1.99242 11.2259 1.98508 11 2.02813L2.77 3.43281C2.4126 3.50092 2.09017 3.69162 1.85833 3.97201C1.62648 4.2524 1.49975 4.60492 1.5 4.96875V6.49999'
			stroke={color}
			strokeLinejoin='round'
		/>
		<line
			x1='4.5'
			y1='7'
			x2='11.5'
			y2='7'
			stroke={color}
			strokeLinecap='round'
		/>
		<line
			x1='4.5'
			y1='9'
			x2='11.5'
			y2='9'
			stroke={color}
			strokeLinecap='round'
		/>
		<line
			x1='4.5'
			y1='11'
			x2='7.5'
			y2='11'
			stroke={color}
			strokeLinecap='round'
		/>
	</svg>
);
