import React, { FC } from 'react';
import { ISocialIconProps } from '../type';
import { IconDiscord18 } from './Discord18';
import { IconDiscord24 } from './Discord24';

export const IconDiscord: FC<ISocialIconProps> = ({
	size = 18,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '18':
			return <IconDiscord18 color={color} />;
		case '24':
			return <IconDiscord24 color={color} />;
		default:
			return <IconDiscord24 size={size} color={color} />;
	}
};
