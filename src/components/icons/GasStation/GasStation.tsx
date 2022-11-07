import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconGasStation16 } from './GasStation16';
import { IconGasStation24 } from './GasStation24';
import { IconGasStation32 } from './GasStation32';

export const IconGasStation: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconGasStation16 color={color} />;
		case '24':
			return <IconGasStation24 color={color} />;
		case '32':
			return <IconGasStation32 color={color} />;
		default:
			return <IconGasStation24 size={size} color={color} />;
	}
};
