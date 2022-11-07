import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconForward16 } from './Forward16';
import { IconForward24 } from './Forward24';
import { IconForward32 } from './Forward32';

export const IconForward: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconForward16 color={color} />;
		case '24':
			return <IconForward24 color={color} />;
		case '32':
			return <IconForward32 color={color} />;
		default:
			return <IconForward24 size={size} color={color} />;
	}
};
