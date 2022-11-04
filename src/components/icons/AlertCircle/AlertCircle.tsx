import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconAlertCircle16 } from './AlertCircle16';
import { IconAlertCircle24 } from './AlertCircle24';
import { IconAlertCircle32 } from './AlertCircle32';

export const IconAlertCircle: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconAlertCircle16 color={color} />;
		case '24':
			return <IconAlertCircle24 color={color} />;
		case '32':
			return <IconAlertCircle32 color={color} />;
		default:
			return <IconAlertCircle24 size={size} color={color} />;
	}
};
