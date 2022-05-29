import React, { FC } from 'react';
import { ISocialIconProps } from '../type';
import { IconInstagram18 } from './Instagram18';
import { IconInstagram24 } from './Instagram24';

export const IconInstagram: FC<ISocialIconProps> = ({
	size = 18,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '18':
			return <IconInstagram18 color={color} />;
		case '24':
			return <IconInstagram24 color={color} />;
		default:
			return <IconInstagram24 size={size} color={color} />;
	}
};
