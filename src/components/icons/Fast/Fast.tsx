import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconFast16 } from './Fast16';
import { IconFast24 } from './Fast24';
import { IconFast32 } from './Fast32';

export const IconFast: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconFast16 color={color} />;
		case '24':
			return <IconFast24 color={color} />;
		case '32':
			return <IconFast32 color={color} />;
		default:
			return <IconFast24 size={size} color={color} />;
	}
};
