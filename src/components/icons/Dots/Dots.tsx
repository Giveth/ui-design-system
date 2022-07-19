import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconDots16 } from './Dots16';
import { IconDots24 } from './Dots24';
import { IconDots32 } from './Dots32';

export const IconDots: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconDots16 color={color} />;
		case '24':
			return <IconDots24 color={color} />;
		case '32':
			return <IconDots32 color={color} />;
		default:
			return <IconDots24 size={size} color={color} />;
	}
};
