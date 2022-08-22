import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconNotificationOutline16: FC<IIconProps> = ({
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
			d='M9.15333 13C9.03613 13.2021 8.86789 13.3698 8.66548 13.4864C8.46307 13.6029 8.23359 13.6643 8 13.6643C7.76641 13.6643 7.53693 13.6029 7.33452 13.4864C7.1321 13.3698 6.96387 13.2021 6.84667 13M12 5.33334C12 4.27248 11.5786 3.25506 10.8284 2.50492C10.0783 1.75477 9.06087 1.33334 8 1.33334C6.93913 1.33334 5.92172 1.75477 5.17157 2.50492C4.42143 3.25506 4 4.27248 4 5.33334C4 10 2 11.3333 2 11.3333H14C14 11.3333 12 10 12 5.33334Z'
			stroke={color}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
