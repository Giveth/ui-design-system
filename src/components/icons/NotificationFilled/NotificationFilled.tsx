import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconNotificationFilled16 } from './NotificationFilled16';
import { IconNotificationFilled24 } from './NotificationFilled24';
import { IconNotificationFilled32 } from './NotificationFilled32';

export const IconNotificationFilled: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconNotificationFilled16 color={color} />;
		case '24':
			return <IconNotificationFilled24 color={color} />;
		case '32':
			return <IconNotificationFilled32 color={color} />;
		default:
			return <IconNotificationFilled24 size={size} color={color} />;
	}
};
