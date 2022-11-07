import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconBackward16 } from './Backward16';
import { IconBackward24 } from './Backward24';
import { IconBackward32 } from './Backward32';

export const IconBackward: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconBackward16 color={color} />;
		case '24':
			return <IconBackward24 color={color} />;
		case '32':
			return <IconBackward32 color={color} />;
		default:
			return <IconBackward24 size={size} color={color} />;
	}
};
