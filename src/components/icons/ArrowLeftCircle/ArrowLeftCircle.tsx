import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconArrowLeftCircle16 } from './ArrowLeftCircle16';
import { IconArrowLeftCircle24 } from './ArrowLeftCircle24';
import { IconArrowLeftCircle32 } from './ArrowLeftCircle32';

export const IconArrowLeftCircle: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconArrowLeftCircle16 color={color} />;
		case '24':
			return <IconArrowLeftCircle24 color={color} />;
		case '32':
			return <IconArrowLeftCircle32 color={color} />;
		default:
			return <IconArrowLeftCircle24 size={size} color={color} />;
	}
};
