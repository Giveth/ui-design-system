import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconCheckCircleOutline16 } from './CheckCircleOutline16';
import { IconCheckCircleOutline24 } from './CheckCircleOutline24';
import { IconCheckCircleOutline32 } from './CheckCircleOutline32';

export const IconCheckCircleOutline: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconCheckCircleOutline16 color={color} />;
		case '24':
			return <IconCheckCircleOutline24 color={color} />;
		case '32':
			return <IconCheckCircleOutline32 color={color} />;
		default:
			return <IconCheckCircleOutline24 size={size} color={color} />;
	}
};
