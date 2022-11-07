import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconUpdate16 } from './Update16';
import { IconUpdate24 } from './Update24';
import { IconUpdate32 } from './Update32';

export const IconUpdate: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconUpdate16 color={color} />;
		case '24':
			return <IconUpdate24 color={color} />;
		case '32':
			return <IconUpdate32 color={color} />;
		default:
			return <IconUpdate24 size={size} color={color} />;
	}
};
