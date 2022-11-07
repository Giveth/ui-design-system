import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconDeactivated16 } from './Deactivated16';
import { IconDeactivated24 } from './Deactivated24';
import { IconDeactivated32 } from './Deactivated32';

export const IconDeactivated: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconDeactivated16 color={color} />;
		case '24':
			return <IconDeactivated24 color={color} />;
		case '32':
			return <IconDeactivated32 color={color} />;
		default:
			return <IconDeactivated24 size={size} color={color} />;
	}
};
