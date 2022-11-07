import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconFlash16 } from './Flash16';
import { IconFlash24 } from './Flash24';
import { IconFlash32 } from './Flash32';

export const IconFlash: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconFlash16 color={color} />;
		case '24':
			return <IconFlash24 color={color} />;
		case '32':
			return <IconFlash32 color={color} />;
		default:
			return <IconFlash24 size={size} color={color} />;
	}
};
