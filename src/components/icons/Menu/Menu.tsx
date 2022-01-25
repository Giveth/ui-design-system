import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconMenu16 } from './Menu16';
import { IconMenu24 } from './Menu24';
import { IconMenu32 } from './Menu32';

export const IconMenu: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconMenu16 color={color} />;
		case '24':
			return <IconMenu24 color={color} />;
		case '32':
			return <IconMenu32 color={color} />;
		default:
			return <IconMenu24 size={size} color={color} />;
	}
};
