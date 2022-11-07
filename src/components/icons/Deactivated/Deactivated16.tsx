import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconDeactivated16: FC<IIconProps> = ({
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
			d='M12.5 8.16667V12.1667C12.5 12.5203 12.3595 12.8594 12.1095 13.1095C11.8594 13.3595 11.5203 13.5 11.1667 13.5H3.83333C3.47971 13.5 3.14057 13.3595 2.89052 13.1095C2.64048 12.8594 2.5 12.5203 2.5 12.1667V4.83333C2.5 4.47971 2.64048 4.14057 2.89052 3.89052C3.14057 3.64048 3.47971 3.5 3.83333 3.5H7.83333M15 1L12 4M12 4L9 7M12 4L9 1M12 4L15 7'
			stroke={color}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
