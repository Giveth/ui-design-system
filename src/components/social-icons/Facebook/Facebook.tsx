import React, { FC } from 'react';
import { ISocialIconProps } from '../type';
import { IconFacebook18 } from './Facebook18';
import { IconFacebook24 } from './Facebook24';

export const IconFacebook: FC<ISocialIconProps> = ({
	size = 18,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '18':
			return <IconFacebook18 color={color} />;
		case '24':
			return <IconFacebook24 color={color} />;
		default:
			return <IconFacebook24 size={size} color={color} />;
	}
};
