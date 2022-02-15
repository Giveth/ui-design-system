import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconLink16 } from './Link16';
import { IconLink24 } from './Link24';
import { IconLink32 } from './Link32';

export const IconLink: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconLink16 color={color} />;
		case '24':
			return <IconLink24 color={color} />;
		case '32':
			return <IconLink32 color={color} />;
		default:
			return <IconLink24 size={size} color={color} />;
	}
};
