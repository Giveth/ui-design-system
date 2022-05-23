import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconUnlock16 } from './Unlock16';
import { IconUnlock24 } from './Unlock24';
import { IconUnlock32 } from './Unlock32';

export const IconUnlock: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconUnlock16 color={color} />;
		case '24':
			return <IconUnlock24 color={color} />;
		case '32':
			return <IconUnlock32 color={color} />;
		default:
			return <IconUnlock24 size={size} color={color} />;
	}
};
