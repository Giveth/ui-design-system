import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconChevronRight16 } from './ChevronRight16';
import { IconChevronRight24 } from './ChevronRight24';
import { IconChevronRight32 } from './ChevronRight32';

export const IconChevronRight: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconChevronRight16 color={color} />;
		case '24':
			return <IconChevronRight24 color={color} />;
		case '32':
			return <IconChevronRight32 color={color} />;
		default:
			return <IconChevronRight24 size={size} color={color} />;
	}
};
