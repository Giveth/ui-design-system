import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconUnArchive16 } from './UnArchive16';
import { IconUnArchive24 } from './UnArchive24';
import { IconUnArchive32 } from './UnArchive32';

export const IconUnArchive: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconUnArchive16 color={color} />;
		case '24':
			return <IconUnArchive24 color={color} />;
		case '32':
			return <IconUnArchive32 color={color} />;
		default:
			return <IconUnArchive24 size={size} color={color} />;
	}
};
