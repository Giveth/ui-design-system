import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconVerifiedBadge16 } from './VerifiedBadge16';
import { IconVerifiedBadge24 } from './VerifiedBadge24';
import { IconVerifiedBadge32 } from './VerifiedBadge32';

export const IconVerifiedBadge: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconVerifiedBadge16 color={color} />;
		case '24':
			return <IconVerifiedBadge24 color={color} />;
		case '32':
			return <IconVerifiedBadge32 color={color} />;
		default:
			return <IconVerifiedBadge24 size={size} color={color} />;
	}
};
