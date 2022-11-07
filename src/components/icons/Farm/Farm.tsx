import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconFarm16 } from './Farm16';
import { IconFarm24 } from './Farm24';
import { IconFarm32 } from './Farm32';

export const IconFarm: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconFarm16 color={color} />;
		case '24':
			return <IconFarm24 color={color} />;
		case '32':
			return <IconFarm32 color={color} />;
		default:
			return <IconFarm24 size={size} color={color} />;
	}
};
