import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconLocationFilled16 } from './LocationFilled16';
import { IconLocationFilled24 } from './LocationFilled24';
import { IconLocationFilled32 } from './LocationFilled32';

export const IconLocationFilled: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconLocationFilled16 color={color} />;
		case '24':
			return <IconLocationFilled24 color={color} />;
		case '32':
			return <IconLocationFilled32 color={color} />;
		default:
			return <IconLocationFilled24 size={size} color={color} />;
	}
};
