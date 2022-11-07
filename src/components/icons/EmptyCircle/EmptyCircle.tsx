import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconEmptyCircle16 } from './EmptyCircle16';
import { IconEmptyCircle24 } from './EmptyCircle24';
import { IconEmptyCircle32 } from './EmptyCircle32';

export const IconEmptyCircle: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconEmptyCircle16 color={color} />;
		case '24':
			return <IconEmptyCircle24 color={color} />;
		case '32':
			return <IconEmptyCircle32 color={color} />;
		default:
			return <IconEmptyCircle24 size={size} color={color} />;
	}
};
