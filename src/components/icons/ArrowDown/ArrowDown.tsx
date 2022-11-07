import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconArrowDown16 } from './ArrowDown16';
import { IconArrowDown24 } from './ArrowDown24';
import { IconArrowDown32 } from './ArrowDown32';

export const IconArrowDown: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconArrowDown16 color={color} />;
		case '24':
			return <IconArrowDown24 color={color} />;
		case '32':
			return <IconArrowDown32 color={color} />;
		default:
			return <IconArrowDown24 size={size} color={color} />;
	}
};
