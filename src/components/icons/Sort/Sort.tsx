import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconSort16 } from './Sort16';
import { IconSort24 } from './Sort24';
import { IconSort32 } from './Sort32';

export const IconSort: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconSort16 color={color} />;
		case '24':
			return <IconSort24 color={color} />;
		case '32':
			return <IconSort32 color={color} />;
		default:
			return <IconSort24 size={size} color={color} />;
	}
};
