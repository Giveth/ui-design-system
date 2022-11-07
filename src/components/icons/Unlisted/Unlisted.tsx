import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconUnlisted16 } from './Unlisted16';
import { IconUnlisted24 } from './Unlisted24';
import { IconUnlisted32 } from './Unlisted32';

export const IconUnlisted: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconUnlisted16 color={color} />;
		case '24':
			return <IconUnlisted24 color={color} />;
		case '32':
			return <IconUnlisted32 color={color} />;
		default:
			return <IconUnlisted24 size={size} color={color} />;
	}
};
