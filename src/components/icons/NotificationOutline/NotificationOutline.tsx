import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconNotificationOutline16 } from './NotificationOutline16';
import { IconNotificationOutline24 } from './NotificationOutline24';
import { IconNotificationOutline32 } from './NotificationOutline32';

export const IconNotificationOutline: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconNotificationOutline16 color={color} />;
		case '24':
			return <IconNotificationOutline24 color={color} />;
		case '32':
			return <IconNotificationOutline32 color={color} />;
		default:
			return <IconNotificationOutline24 size={size} color={color} />;
	}
};
