import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconUnstake16 } from './Unstake16';
import { IconUnstake24 } from './Unstake24';
import { IconUnstake32 } from './Unstake32';

export const IconUnstake: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconUnstake16 color={color} />;
		case '24':
			return <IconUnstake24 color={color} />;
		case '32':
			return <IconUnstake32 color={color} />;
		default:
			return <IconUnstake24 size={size} color={color} />;
	}
};
