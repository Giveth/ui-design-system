import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconMessageSquare16 } from './MessageSquare16';
import { IconMessageSquare24 } from './MessageSquare24';
import { IconMessageSquare32 } from './MessageSquare32';

export const IconMessageSquare: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconMessageSquare16 color={color} />;
		case '24':
			return <IconMessageSquare24 color={color} />;
		case '32':
			return <IconMessageSquare32 color={color} />;
		default:
			return <IconMessageSquare24 size={size} color={color} />;
	}
};
