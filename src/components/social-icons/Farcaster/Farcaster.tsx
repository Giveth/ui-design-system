import React, { FC } from 'react';
import { ISocialIconProps } from '../type';
import { IconFarcaster24 } from './Farcaster24';

export const IconFacebook: FC<ISocialIconProps> = ({
	size = 18,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '24':
			return <IconFarcaster24 color={color} />;
		default:
			return <IconFarcaster24 size={size} color={color} />;
	}
};
