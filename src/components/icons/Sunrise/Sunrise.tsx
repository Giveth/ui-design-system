import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconSunrise16 } from './Sunrise16';
import { IconSunrise24 } from './Sunrise24';
import { IconSunrise32 } from './Sunrise32';

export const IconSunrise: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconSunrise16 color={color} />;
		case '24':
			return <IconSunrise24 color={color} />;
		case '32':
			return <IconSunrise32 color={color} />;
		default:
			return <IconSunrise24 size={size} color={color} />;
	}
};
