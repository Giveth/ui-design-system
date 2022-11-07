import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconX16 } from './X16';
import { IconX24 } from './X24';
import { IconX32 } from './X32';

export const IconX: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconX16 color={color} />;
		case '24':
			return <IconX24 color={color} />;
		case '32':
			return <IconX32 color={color} />;
		default:
			return <IconX24 size={size} color={color} />;
	}
};
