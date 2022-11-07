import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconNotificationFilled16: FC<IIconProps> = ({
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
			d='M12 5.33334C12 4.27248 11.5786 3.25506 10.8284 2.50492C10.0783 1.75477 9.06087 1.33334 8 1.33334C6.93913 1.33334 5.92172 1.75477 5.17157 2.50492C4.42143 3.25506 4 4.27248 4 5.33334C4 10 2 11.3333 2 11.3333H14C14 11.3333 12 10 12 5.33334Z'
			fill={color}
			stroke={color}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.15335 13.3333C9.03614 13.5354 8.86791 13.7031 8.6655 13.8197C8.46309 13.9363 8.2336 13.9976 8.00001 13.9976C7.76643 13.9976 7.53694 13.9363 7.33453 13.8197C7.13212 13.7031 6.96389 13.5354 6.84668 13.3333'
			stroke={color}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
