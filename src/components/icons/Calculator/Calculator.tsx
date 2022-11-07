import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconCalculator16 } from './Calculator16';
import { IconCalculator24 } from './Calculator24';
import { IconCalculator32 } from './Calculator32';

export const IconCalculator: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconCalculator16 color={color} />;
		case '24':
			return <IconCalculator24 color={color} />;
		case '32':
			return <IconCalculator32 color={color} />;
		default:
			return <IconCalculator24 size={size} color={color} />;
	}
};
