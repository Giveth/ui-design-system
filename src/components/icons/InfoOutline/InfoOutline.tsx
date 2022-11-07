import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconInfoOutline16 } from './InfoOutline16';
import { IconInfoOutline24 } from './InfoOutline24';
import { IconInfoOutline32 } from './InfoOutline32';

export const IconInfoOutline: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconInfoOutline16 color={color} />;
		case '24':
			return <IconInfoOutline24 color={color} />;
		case '32':
			return <IconInfoOutline32 color={color} />;
		default:
			return <IconInfoOutline24 size={size} color={color} />;
	}
};
