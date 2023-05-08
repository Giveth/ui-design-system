import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconIncrease16 } from './Increase16';
import { IconIncrease24 } from './Increase24';
import { IconIncrease32 } from './Increase32';

export const IconIncrease: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconIncrease16 color={color} />;
		case '24':
			return <IconIncrease24 color={color} />;
		case '32':
			return <IconIncrease32 color={color} />;
		default:
			return <IconIncrease24 size={size} color={color} />;
	}
};
