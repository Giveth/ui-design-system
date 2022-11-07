import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconTrace16 } from './Trace16';
import { IconTrace24 } from './Trace24';
import { IconTrace32 } from './Trace32';

export const IconTrace: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconTrace16 color={color} />;
		case '24':
			return <IconTrace24 color={color} />;
		case '32':
			return <IconTrace32 color={color} />;
		default:
			return <IconTrace24 size={size} color={color} />;
	}
};
