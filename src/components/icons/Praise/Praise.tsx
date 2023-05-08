import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconPraise16 } from './Praise16';
import { IconPraise24 } from './Praise24';
import { IconPraise32 } from './Praise32';

export const IconPraise: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconPraise16 color={color} />;
		case '24':
			return <IconPraise24 color={color} />;
		case '32':
			return <IconPraise32 color={color} />;
		default:
			return <IconPraise24 size={size} color={color} />;
	}
};
