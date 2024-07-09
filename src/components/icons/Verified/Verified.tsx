import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconVerified24 } from './Verified24';

export const IconVerified: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '24':
			return <IconVerified24 color={color} />;
		default:
			return <IconVerified24 size={size} color={color} />;
	}
};
