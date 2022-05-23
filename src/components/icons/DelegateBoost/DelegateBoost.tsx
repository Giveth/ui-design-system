import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconDelegateBoost16 } from './DelegateBoost16';
import { IconDelegateBoost24 } from './DelegateBoost24';
import { IconDelegateBoost32 } from './DelegateBoost32';

export const IconDelegateBoost: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconDelegateBoost16 color={color} />;
		case '24':
			return <IconDelegateBoost24 color={color} />;
		case '32':
			return <IconDelegateBoost32 color={color} />;
		default:
			return <IconDelegateBoost24 size={size} color={color} />;
	}
};
