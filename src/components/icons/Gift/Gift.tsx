import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconGift24 } from './Gift24';
import { IconGift32 } from './Gift32';
import { IconGift16 } from './Gift16';

export const IconGift: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconGift16 color={color} />;
		case '24':
			return <IconGift24 color={color} />;
		case '32':
			return <IconGift32 color={color} />;
		default:
			return <IconGift32 size={size} color={color} />;
	}
};
