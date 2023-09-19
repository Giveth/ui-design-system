import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconStar24: FC<IIconProps> = ({
	size = 24,
	color = 'currentColor',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M18.9674 22.5005C18.8095 22.5011 18.6555 22.4519 18.5272 22.3598L12.4987 17.9892L6.47005 22.3598C6.34125 22.4533 6.18609 22.5033 6.02698 22.5027C5.86787 22.5021 5.71307 22.451 5.58496 22.3566C5.45684 22.2623 5.36205 22.1296 5.31429 21.9779C5.26653 21.8261 5.26827 21.6631 5.31927 21.5123L7.67052 14.5481L1.57676 10.3692C1.44477 10.2788 1.34515 10.1485 1.29245 9.99748C1.23976 9.84641 1.23676 9.68246 1.28388 9.52956C1.33101 9.37666 1.42579 9.24285 1.55439 9.14766C1.68298 9.05246 1.83865 9.00089 1.99864 9.00047H9.51646L11.7852 2.01844C11.8341 1.8677 11.9294 1.73631 12.0576 1.64313C12.1858 1.54995 12.3402 1.49976 12.4987 1.49976C12.6571 1.49976 12.8115 1.54995 12.9397 1.64313C13.0679 1.73631 13.1632 1.8677 13.2121 2.01844L15.4808 9.00282H22.9987C23.1589 9.00274 23.3149 9.05395 23.4438 9.14896C23.5728 9.24397 23.668 9.37777 23.7154 9.53079C23.7628 9.6838 23.76 9.84797 23.7074 9.99927C23.6547 10.1506 23.555 10.281 23.4229 10.3716L17.3268 14.5481L19.6766 21.5105C19.7147 21.6232 19.7254 21.7434 19.7079 21.861C19.6903 21.9787 19.645 22.0905 19.5758 22.1872C19.5065 22.284 19.4152 22.3628 19.3094 22.4173C19.2036 22.4717 19.0864 22.5003 18.9674 22.5005Z'
			fill={color}
		/>
	</svg>
);