import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconEnter16 } from './Enter16';
import { IconEnter24 } from './Enter24';
import { IconEnter32 } from './Enter32';

export const IconEnter: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconEnter16 color={color} />;
		case '24':
			return <IconEnter24 color={color} />;
		case '32':
			return <IconEnter32 color={color} />;
		default:
			return <IconEnter24 size={size} color={color} />;
	}
};
