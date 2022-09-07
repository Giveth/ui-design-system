import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconUnLockable16 } from './UnLockable16';
import { IconUnLockable24 } from './UnLockable24';
import { IconUnLockable32 } from './UnLockable32';

export const IconUnLockable: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconUnLockable16 color={color} />;
		case '24':
			return <IconUnLockable24 color={color} />;
		case '32':
			return <IconUnLockable32 color={color} />;
		default:
			return <IconUnLockable24 size={size} color={color} />;
	}
};
