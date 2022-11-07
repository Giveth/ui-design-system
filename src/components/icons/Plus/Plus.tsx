import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconPlus16 } from './Plus16';
import { IconPlus24 } from './Plus24';
import { IconPlus32 } from './Plus32';

export const IconPlus: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconPlus16 color={color} />;
		case '24':
			return <IconPlus24 color={color} />;
		case '32':
			return <IconPlus32 color={color} />;
		default:
			return <IconPlus24 size={size} color={color} />;
	}
};
