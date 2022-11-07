import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconAdminNotif16 } from './AdminNotif16';
import { IconAdminNotif24 } from './AdminNotif24';
import { IconAdminNotif32 } from './AdminNotif32';

export const IconAdminNotif: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconAdminNotif16 color={color} />;
		case '24':
			return <IconAdminNotif24 color={color} />;
		case '32':
			return <IconAdminNotif32 color={color} />;
		default:
			return <IconAdminNotif24 size={size} color={color} />;
	}
};
