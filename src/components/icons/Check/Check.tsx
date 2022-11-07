import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconCheck16 } from './Check16';
import { IconCheck24 } from './Check24';
import { IconCheck32 } from './Check32';

export const IconCheck: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconCheck16 color={color} />;
		case '24':
			return <IconCheck24 color={color} />;
		case '32':
			return <IconCheck32 color={color} />;
		default:
			return <IconCheck24 size={size} color={color} />;
	}
};
