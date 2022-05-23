import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconLock16 } from './Lock16';
import { IconLock24 } from './Lock24';
import { IconLock32 } from './Lock32';

export const IconLock: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconLock16 color={color} />;
		case '24':
			return <IconLock24 color={color} />;
		case '32':
			return <IconLock32 color={color} />;
		default:
			return <IconLock24 size={size} color={color} />;
	}
};
