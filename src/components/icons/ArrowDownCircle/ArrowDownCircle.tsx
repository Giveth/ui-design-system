import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconArrowDownCircle16 } from './ArrowDownCircle16';
import { IconArrowDownCircle24 } from './ArrowDownCircle24';
import { IconArrowDownCircle32 } from './ArrowDownCircle32';

export const IconArrowDownCircle: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconArrowDownCircle16 color={color} />;
		case '24':
			return <IconArrowDownCircle24 color={color} />;
		case '32':
			return <IconArrowDownCircle32 color={color} />;
		default:
			return <IconArrowDownCircle24 size={size} color={color} />;
	}
};
