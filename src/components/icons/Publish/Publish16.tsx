import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconPublish16: FC<IIconProps> = ({
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
			d='M12.25 11H13.5C13.8315 11 14.1495 10.8683 14.3839 10.6339C14.6183 10.3995 14.75 10.0815 14.75 9.75V3.25C14.75 2.91848 14.6183 2.60054 14.3839 2.36612C14.1495 2.1317 13.8315 2 13.5 2H2.5C2.16848 2 1.85054 2.1317 1.61612 2.36612C1.3817 2.60054 1.25 2.91848 1.25 3.25V9.75C1.25 10.0815 1.3817 10.3995 1.61612 10.6339C1.85054 10.8683 2.16848 11 2.5 11H3.75M5.5 9L8 6.5L10.5 9M8 13.5V7'
			stroke={color}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
