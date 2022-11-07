import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconNoGiveback16 } from './NoGiveback16';
import { IconNoGiveback24 } from './NoGiveback24';
import { IconNoGiveback32 } from './NoGiveback32';

export const IconNoGiveback: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconNoGiveback16 color={color} />;
		case '24':
			return <IconNoGiveback24 color={color} />;
		case '32':
			return <IconNoGiveback32 color={color} />;
		default:
			return <IconNoGiveback24 size={size} color={color} />;
	}
};
