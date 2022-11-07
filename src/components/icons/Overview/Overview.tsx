import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconOverview16 } from './Overview16';
import { IconOverview24 } from './Overview24';
import { IconOverview32 } from './Overview32';

export const IconOverview: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconOverview16 color={color} />;
		case '24':
			return <IconOverview24 color={color} />;
		case '32':
			return <IconOverview32 color={color} />;
		default:
			return <IconOverview24 size={size} color={color} />;
	}
};
