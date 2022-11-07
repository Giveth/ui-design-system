import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconFund16 } from './Fund16';
import { IconFund24 } from './Fund24';
import { IconFund32 } from './Fund32';

export const IconFund: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconFund16 color={color} />;
		case '24':
			return <IconFund24 color={color} />;
		case '32':
			return <IconFund32 color={color} />;
		default:
			return <IconFund24 size={size} color={color} />;
	}
};
