import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconChevronDown16 } from './ChevronDown16';
import { IconChevronDown24 } from './ChevronDown24';
import { IconChevronDown32 } from './ChevronDown32';

export const IconChevronDown: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconChevronDown16 color={color} />;
		case '24':
			return <IconChevronDown24 color={color} />;
		case '32':
			return <IconChevronDown32 color={color} />;
		default:
			return <IconChevronDown24 size={size} color={color} />;
	}
};
