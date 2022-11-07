import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconCopy16 } from './Copy16';
import { IconCopy24 } from './Copy24';
import { IconCopy32 } from './Copy32';

export const IconCopy: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconCopy16 color={color} />;
		case '24':
			return <IconCopy24 color={color} />;
		case '32':
			return <IconCopy32 color={color} />;
		default:
			return <IconCopy24 size={size} color={color} />;
	}
};
