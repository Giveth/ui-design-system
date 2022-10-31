import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconConfig16 } from './Config16';
import { IconConfig24 } from './Config24';
import { IconConfig32 } from './Config32';

export const IconConfig: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconConfig16 color={color} />;
		case '24':
			return <IconConfig24 color={color} />;
		case '32':
			return <IconConfig32 color={color} />;
		default:
			return <IconConfig24 size={size} color={color} />;
	}
};
