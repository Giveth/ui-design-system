import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconNotification16 } from './Notification16';
import { IconNotification24 } from './Notification24';
import { IconNotification32 } from './Notification32';

export const IconNotification: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconNotification16 color={color} />;
		case '24':
			return <IconNotification24 color={color} />;
		case '32':
			return <IconNotification32 color={color} />;
		default:
			return <IconNotification24 size={size} color={color} />;
	}
};
