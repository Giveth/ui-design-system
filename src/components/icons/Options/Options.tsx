import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconOptions16 } from './Options16';
import { IconOptions24 } from './Options24';
import { IconOptions32 } from './Options32';

export const IconOptions: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconOptions16 color={color} />;
		case '24':
			return <IconOptions24 color={color} />;
		case '32':
			return <IconOptions32 color={color} />;
		default:
			return <IconOptions24 size={size} color={color} />;
	}
};
