import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconArrowRight16 } from './ArrowRight16';
import { IconArrowRight24 } from './ArrowRight24';
import { IconArrowRight32 } from './ArrowRight32';

export const IconArrowRight: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconArrowRight16 color={color} />;
		case '24':
			return <IconArrowRight24 color={color} />;
		case '32':
			return <IconArrowRight32 color={color} />;
		default:
			return <IconArrowRight24 size={size} color={color} />;
	}
};
