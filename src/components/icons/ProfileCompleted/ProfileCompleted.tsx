import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconProfileCompleted16 } from './ProfileCompleted16';
import { IconProfileCompleted24 } from './ProfileCompleted24';
import { IconProfileCompleted32 } from './ProfileCompleted32';

export const IconProfileCompleted: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconProfileCompleted16 color={color} />;
		case '24':
			return <IconProfileCompleted24 color={color} />;
		case '32':
			return <IconProfileCompleted32 color={color} />;
		default:
			return <IconProfileCompleted24 size={size} color={color} />;
	}
};
