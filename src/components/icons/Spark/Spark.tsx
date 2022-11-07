import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconSpark16 } from './Spark16';
import { IconSpark24 } from './Spark24';
import { IconSpark32 } from './Spark32';

export const IconSpark: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconSpark16 color={color} />;
		case '24':
			return <IconSpark24 color={color} />;
		case '32':
			return <IconSpark32 color={color} />;
		default:
			return <IconSpark24 size={size} color={color} />;
	}
};
