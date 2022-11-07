import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconActivated16 } from './Activated16';
import { IconActivated24 } from './Activated24';
import { IconActivated32 } from './Activated32';

export const IconActivated: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconActivated16 color={color} />;
		case '24':
			return <IconActivated24 color={color} />;
		case '32':
			return <IconActivated32 color={color} />;
		default:
			return <IconActivated24 size={size} color={color} />;
	}
};
