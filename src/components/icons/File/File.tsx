import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconFile16 } from './File16';
import { IconFile24 } from './File24';
import { IconFile32 } from './File32';

export const IconFile: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconFile16 color={color} />;
		case '24':
			return <IconFile24 color={color} />;
		case '32':
			return <IconFile32 color={color} />;
		default:
			return <IconFile24 size={size} color={color} />;
	}
};
