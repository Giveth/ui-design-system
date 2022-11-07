import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconEye16 } from './Eye16';
import { IconEye24 } from './Eye24';
import { IconEye32 } from './Eye32';

export const IconEye: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconEye16 color={color} />;
		case '24':
			return <IconEye24 color={color} />;
		case '32':
			return <IconEye32 color={color} />;
		default:
			return <IconEye24 size={size} color={color} />;
	}
};
