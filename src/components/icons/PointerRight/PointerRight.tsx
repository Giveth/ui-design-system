import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconPointerRight16 } from './PointerRight16';
import { IconPointerRight24 } from './PointerRight24';
import { IconPointerRight32 } from './PointerRight32';

export const IconPointerRight: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconPointerRight16 color={color} />;
		case '24':
			return <IconPointerRight24 color={color} />;
		case '32':
			return <IconPointerRight32 color={color} />;
		default:
			return <IconPointerRight24 size={size} color={color} />;
	}
};
