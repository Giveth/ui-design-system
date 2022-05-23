import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconRocketInSpace16 } from './RocketInSpace16';
import { IconRocketInSpace24 } from './RocketInSpace24';
import { IconRocketInSpace32 } from './RocketInSpace32';

export const IconRocketInSpace: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconRocketInSpace16 color={color} />;
		case '24':
			return <IconRocketInSpace24 color={color} />;
		case '32':
			return <IconRocketInSpace32 color={color} />;
		default:
			return <IconRocketInSpace24 size={size} color={color} />;
	}
};
