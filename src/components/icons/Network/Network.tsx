import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconNetwork16 } from './Network16';
import { IconNetwork24 } from './Network24';
import { IconNetwork32 } from './Network32';

export const IconNetwork: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconNetwork16 color={color} />;
		case '24':
			return <IconNetwork24 color={color} />;
		case '32':
			return <IconNetwork32 color={color} />;
		default:
			return <IconNetwork24 size={size} color={color} />;
	}
};
