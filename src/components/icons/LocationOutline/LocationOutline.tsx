import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconLocationOutline16 } from './LocationOutline16';
import { IconLocationOutline24 } from './LocationOutline24';
import { IconLocationOutline32 } from './LocationOutline32';

export const IconLocationOutline: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconLocationOutline16 color={color} />;
		case '24':
			return <IconLocationOutline24 color={color} />;
		case '32':
			return <IconLocationOutline32 color={color} />;
		default:
			return <IconLocationOutline24 size={size} color={color} />;
	}
};
