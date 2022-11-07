import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconListed16 } from './Listed16';
import { IconListed24 } from './Listed24';
import { IconListed32 } from './Listed32';

export const IconListed: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconListed16 color={color} />;
		case '24':
			return <IconListed24 color={color} />;
		case '32':
			return <IconListed32 color={color} />;
		default:
			return <IconListed24 size={size} color={color} />;
	}
};
