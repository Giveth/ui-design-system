import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconHeartOutline16 } from './HeartOutline16';
import { IconHeartOutline24 } from './HeartOutline24';
import { IconHeartOutline32 } from './HeartOutline32';

export const IconHeartOutline: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconHeartOutline16 color={color} />;
		case '24':
			return <IconHeartOutline24 color={color} />;
		case '32':
			return <IconHeartOutline32 color={color} />;
		default:
			return <IconHeartOutline24 size={size} color={color} />;
	}
};
