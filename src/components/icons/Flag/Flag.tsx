import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconFlag16 } from './Flag16';
import { IconFlag24 } from './Flag24';
import { IconFlag32 } from './Flag32';

export const IconFlag: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconFlag16 color={color} />;
		case '24':
			return <IconFlag24 color={color} />;
		case '32':
			return <IconFlag32 color={color} />;
		default:
			return <IconFlag24 size={size} color={color} />;
	}
};
