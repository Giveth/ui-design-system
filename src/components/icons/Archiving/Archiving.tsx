import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconArchiving16 } from './Archiving16';
import { IconArchiving24 } from './Archiving24';
import { IconArchiving32 } from './Archiving32';

export const IconArchiving: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconArchiving16 color={color} />;
		case '24':
			return <IconArchiving24 color={color} />;
		case '32':
			return <IconArchiving32 color={color} />;
		default:
			return <IconArchiving24 size={size} color={color} />;
	}
};
