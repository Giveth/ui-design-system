import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconArchive16 } from './Archive16';
import { IconArchive24 } from './Archive24';
import { IconArchive32 } from './Archive32';

export const IconArchive: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconArchive16 color={color} />;
		case '24':
			return <IconArchive24 color={color} />;
		case '32':
			return <IconArchive32 color={color} />;
		default:
			return <IconArchive24 size={size} color={color} />;
	}
};
