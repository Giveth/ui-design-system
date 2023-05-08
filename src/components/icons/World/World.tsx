import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconWorld16 } from './World16';
import { IconWorld24 } from './World24';
import { IconWorld32 } from './World32';

export const IconWorld: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconWorld16 color={color} />;
		case '24':
			return <IconWorld24 color={color} />;
		case '32':
			return <IconWorld32 color={color} />;
		default:
			return <IconWorld24 size={size} color={color} />;
	}
};
