import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconHeartFilled16 } from './HeartFilled16';
import { IconHeartFilled24 } from './HeartFilled24';
import { IconHeartFilled32 } from './HeartFilled32';

export const IconHeartFilled: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconHeartFilled16 color={color} />;
		case '24':
			return <IconHeartFilled24 color={color} />;
		case '32':
			return <IconHeartFilled32 color={color} />;
		default:
			return <IconHeartFilled24 size={size} color={color} />;
	}
};
