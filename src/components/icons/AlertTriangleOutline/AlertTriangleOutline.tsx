import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconAlertTriangleOutline16 } from './AlertTriangleOutline16';
import { IconAlertTriangleOutline24 } from './AlertTriangleOutline24';
import { IconAlertTriangleOutline32 } from './AlertTriangleOutline32';

export const IconAlertTriangleOutline: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconAlertTriangleOutline16 color={color} />;
		case '24':
			return <IconAlertTriangleOutline24 color={color} />;
		case '32':
			return <IconAlertTriangleOutline32 color={color} />;
		default:
			return <IconAlertTriangleOutline24 size={size} color={color} />;
	}
};
