import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconImage16 } from './Image16';
import { IconImage24 } from './Image24';
import { IconImage32 } from './Image32';

export const IconImage: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconImage16 color={color} />;
		case '24':
			return <IconImage24 color={color} />;
		case '32':
			return <IconImage32 color={color} />;
		default:
			return <IconImage24 size={size} color={color} />;
	}
};
