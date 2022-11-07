import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconDotsHorizontal16 } from './DotsHorizontal16';
import { IconDotsHorizontal24 } from './DotsHorizontal24';
import { IconDotsHorizontal32 } from './DotsHorizontal32';

export const IconDotsHorizontal: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconDotsHorizontal16 color={color} />;
		case '24':
			return <IconDotsHorizontal24 color={color} />;
		case '32':
			return <IconDotsHorizontal32 color={color} />;
		default:
			return <IconDotsHorizontal24 size={size} color={color} />;
	}
};
