import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconSearch16 } from './Search16';
import { IconSearch24 } from './Search24';
import { IconSearch32 } from './Search32';

export const IconSearch: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconSearch16 color={color} />;
		case '24':
			return <IconSearch24 color={color} />;
		case '32':
			return <IconSearch32 color={color} />;
		default:
			return <IconSearch24 size={size} color={color} />;
	}
};
