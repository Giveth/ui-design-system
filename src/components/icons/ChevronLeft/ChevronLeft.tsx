import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconChevronLeft16 } from './ChevronLeft16';
import { IconChevronLeft24 } from './ChevronLeft24';
import { IconChevronLeft32 } from './ChevronLeft32';

export const IconChevronLeft: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconChevronLeft16 color={color} />;
		case '24':
			return <IconChevronLeft24 color={color} />;
		case '32':
			return <IconChevronLeft32 color={color} />;
		default:
			return <IconChevronLeft24 size={size} color={color} />;
	}
};
