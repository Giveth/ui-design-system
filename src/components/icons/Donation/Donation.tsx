import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconDonation16 } from './Donation16';
import { IconDonation24 } from './Donation24';
import { IconDonation32 } from './Donation32';

export const IconDonation: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconDonation16 color={color} />;
		case '24':
			return <IconDonation24 color={color} />;
		case '32':
			return <IconDonation32 color={color} />;
		default:
			return <IconDonation24 size={size} color={color} />;
	}
};
