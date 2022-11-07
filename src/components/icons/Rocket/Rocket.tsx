import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconRocket16 } from './Rocket16';
import { IconRocket24 } from './Rocket24';
import { IconRocket32 } from './Rocket32';

export const IconRocket: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconRocket16 color={color} />;
		case '24':
			return <IconRocket24 color={color} />;
		case '32':
			return <IconRocket32 color={color} />;
		default:
			return <IconRocket24 size={size} color={color} />;
	}
};
