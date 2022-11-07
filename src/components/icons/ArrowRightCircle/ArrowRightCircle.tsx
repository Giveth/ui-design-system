import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconArrowRightCircle16 } from './ArrowRightCircle16';
import { IconArrowRightCircle24 } from './ArrowRightCircle24';
import { IconArrowRightCircle32 } from './ArrowRightCircle32';

export const IconArrowRightCircle: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconArrowRightCircle16 color={color} />;
		case '24':
			return <IconArrowRightCircle24 color={color} />;
		case '32':
			return <IconArrowRightCircle32 color={color} />;
		default:
			return <IconArrowRightCircle24 size={size} color={color} />;
	}
};
