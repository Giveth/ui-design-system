import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconRefresh16 } from './Refresh16';
import { IconRefresh24 } from './Refresh24';
import { IconRefresh32 } from './Refresh32';

export const IconRefresh: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconRefresh16 color={color} />;
		case '24':
			return <IconRefresh24 color={color} />;
		case '32':
			return <IconRefresh32 color={color} />;
		default:
			return <IconRefresh24 size={size} color={color} />;
	}
};
