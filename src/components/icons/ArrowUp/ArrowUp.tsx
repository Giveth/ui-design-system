import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconArrowUp16 } from './ArrowUp16';
import { IconArrowUp24 } from './ArrowUp24';
import { IconArrowUp32 } from './ArrowUp32';

export const IconArrowUp: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconArrowUp16 color={color} />;
		case '24':
			return <IconArrowUp24 color={color} />;
		case '32':
			return <IconArrowUp32 color={color} />;
		default:
			return <IconArrowUp24 size={size} color={color} />;
	}
};
