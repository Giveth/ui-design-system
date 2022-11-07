import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconFilter16 } from './Filter16';
import { IconFilter24 } from './Filter24';
import { IconFilter32 } from './Filter32';

export const IconFilter: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconFilter16 color={color} />;
		case '24':
			return <IconFilter24 color={color} />;
		case '32':
			return <IconFilter32 color={color} />;
		default:
			return <IconFilter24 size={size} color={color} />;
	}
};
