import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconTrash16 } from './Trash16';
import { IconTrash24 } from './Trash24';
import { IconTrash32 } from './Trash32';

export const IconTrash: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconTrash16 color={color} />;
		case '24':
			return <IconTrash24 color={color} />;
		case '32':
			return <IconTrash32 color={color} />;
		default:
			return <IconTrash24 size={size} color={color} />;
	}
};
