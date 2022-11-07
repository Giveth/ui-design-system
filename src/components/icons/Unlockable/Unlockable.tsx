import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconUnlockable16 } from './Unlockable16';
import { IconUnlockable24 } from './Unlockable24';
import { IconUnlockable32 } from './Unlockable32';

export const IconUnlockable: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconUnlockable16 color={color} />;
		case '24':
			return <IconUnlockable24 color={color} />;
		case '32':
			return <IconUnlockable32 color={color} />;
		default:
			return <IconUnlockable24 size={size} color={color} />;
	}
};
