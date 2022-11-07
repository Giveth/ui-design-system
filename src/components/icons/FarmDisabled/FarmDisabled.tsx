import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconFarmDisabled16 } from './FarmDisabled16';
import { IconFarmDisabled24 } from './FarmDisabled24';
import { IconFarmDisabled32 } from './FarmDisabled32';

export const IconFarmDisabled: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconFarmDisabled16 color={color} />;
		case '24':
			return <IconFarmDisabled24 color={color} />;
		case '32':
			return <IconFarmDisabled32 color={color} />;
		default:
			return <IconFarmDisabled24 size={size} color={color} />;
	}
};
