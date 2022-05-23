import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconAutoBoost16 } from './AutoBoost16';
import { IconAutoBoost24 } from './AutoBoost24';
import { IconAutoBoost32 } from './AutoBoost32';

export const IconAutoBoost: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconAutoBoost16 color={color} />;
		case '24':
			return <IconAutoBoost24 color={color} />;
		case '32':
			return <IconAutoBoost32 color={color} />;
		default:
			return <IconAutoBoost24 size={size} color={color} />;
	}
};
