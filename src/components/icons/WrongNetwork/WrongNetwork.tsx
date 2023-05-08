import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconWrongNetwork16 } from './WrongNetwork16';
import { IconWrongNetwork24 } from './WrongNetwork24';
import { IconWrongNetwork32 } from './WrongNetwork32';

export const IconWrongNetwork: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconWrongNetwork16 color={color} />;
		case '24':
			return <IconWrongNetwork24 color={color} />;
		case '32':
			return <IconWrongNetwork32 color={color} />;
		default:
			return <IconWrongNetwork24 size={size} color={color} />;
	}
};
