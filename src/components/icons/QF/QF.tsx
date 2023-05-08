import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconQF16 } from './QF16';
import { IconQF24 } from './QF24';
import { IconQF32 } from './QF32';

export const IconQF: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconQF16 color={color} />;
		case '24':
			return <IconQF24 color={color} />;
		case '32':
			return <IconQF32 color={color} />;
		default:
			return <IconQF24 size={size} color={color} />;
	}
};
