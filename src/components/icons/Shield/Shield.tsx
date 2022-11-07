import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconShield16 } from './Shield16';
import { IconShield24 } from './Shield24';
import { IconShield32 } from './Shield32';

export const IconShield: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconShield16 color={color} />;
		case '24':
			return <IconShield24 color={color} />;
		case '32':
			return <IconShield32 color={color} />;
		default:
			return <IconShield24 size={size} color={color} />;
	}
};
