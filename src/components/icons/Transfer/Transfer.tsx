import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconTransfer16 } from './Transfer16';
import { IconTransfer24 } from './Transfer24';
import { IconTransfer32 } from './Transfer32';

export const IconTransfer: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconTransfer16 color={color} />;
		case '24':
			return <IconTransfer24 color={color} />;
		case '32':
			return <IconTransfer32 color={color} />;
		default:
			return <IconTransfer24 size={size} color={color} />;
	}
};
