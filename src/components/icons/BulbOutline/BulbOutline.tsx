import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconBulbOutline16 } from './BulbOutline16';
import { IconBulbOutline24 } from './BulbOutline24';
import { IconBulbOutline32 } from './BulbOutline32';

export const IconBulbOutline: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconBulbOutline16 color={color} />;
		case '24':
			return <IconBulbOutline24 color={color} />;
		case '32':
			return <IconBulbOutline32 color={color} />;
		default:
			return <IconBulbOutline24 size={size} color={color} />;
	}
};
