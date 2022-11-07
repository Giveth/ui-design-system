import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconArrowUpCircle16 } from './ArrowUpCircle16';
import { IconArrowUpCircle24 } from './ArrowUpCircle24';
import { IconArrowUpCircle32 } from './ArrowUpCircle32';

export const IconArrowUpCircle: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconArrowUpCircle16 color={color} />;
		case '24':
			return <IconArrowUpCircle24 color={color} />;
		case '32':
			return <IconArrowUpCircle32 color={color} />;
		default:
			return <IconArrowUpCircle24 size={size} color={color} />;
	}
};
