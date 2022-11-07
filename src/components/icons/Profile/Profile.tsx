import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconProfile16 } from './Profile16';
import { IconProfile24 } from './Profile24';
import { IconProfile32 } from './Profile32';

export const IconProfile: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconProfile16 color={color} />;
		case '24':
			return <IconProfile24 color={color} />;
		case '32':
			return <IconProfile32 color={color} />;
		default:
			return <IconProfile24 size={size} color={color} />;
	}
};
