import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconStake16 } from './Stake16';
import { IconStake24 } from './Stake24';
import { IconStake32 } from './Stake32';

export const IconStake: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconStake16 color={color} />;
		case '24':
			return <IconStake24 color={color} />;
		case '32':
			return <IconStake32 color={color} />;
		default:
			return <IconStake24 size={size} color={color} />;
	}
};
