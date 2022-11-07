import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconEyeOff16 } from './EyeOff16';
import { IconEyeOff24 } from './EyeOff24';
import { IconEyeOff32 } from './EyeOff32';

export const IconEyeOff: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconEyeOff16 color={color} />;
		case '24':
			return <IconEyeOff24 color={color} />;
		case '32':
			return <IconEyeOff32 color={color} />;
		default:
			return <IconEyeOff24 size={size} color={color} />;
	}
};
