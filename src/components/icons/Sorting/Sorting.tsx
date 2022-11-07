import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconSorting16 } from './Sorting16';
import { IconSorting24 } from './Sorting24';
import { IconSorting32 } from './Sorting32';

export const IconSorting: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconSorting16 color={color} />;
		case '24':
			return <IconSorting24 color={color} />;
		case '32':
			return <IconSorting32 color={color} />;
		default:
			return <IconSorting24 size={size} color={color} />;
	}
};
