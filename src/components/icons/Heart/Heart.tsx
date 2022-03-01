import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconHeart16 } from './Heart16';
import { IconHeart24 } from './Heart24';
import { IconHeart32 } from './Heart32';

export const IconHeart: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconHeart16 color={color} />;
		case '24':
			return <IconHeart24 color={color} />;
		case '32':
			return <IconHeart32 color={color} />;
		default:
			return <IconHeart24 size={size} color={color} />;
	}
};
