import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconChevronUp16 } from './ChevronUp16';
import { IconChevronUp24 } from './ChevronUp24';
import { IconChevronUp32 } from './ChevronUp32';

export const IconChevronUp: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconChevronUp16 color={color} />;
		case '24':
			return <IconChevronUp24 color={color} />;
		case '32':
			return <IconChevronUp32 color={color} />;
		default:
			return <IconChevronUp24 size={size} color={color} />;
	}
};
