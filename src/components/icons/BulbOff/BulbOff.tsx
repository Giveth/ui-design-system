import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconBulbOff16 } from './BulbOff16';
import { IconBulbOff24 } from './BulbOff24';
import { IconBulbOff32 } from './BulbOff32';

export const IconBulbOff: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconBulbOff16 color={color} />;
		case '24':
			return <IconBulbOff24 color={color} />;
		case '32':
			return <IconBulbOff32 color={color} />;
		default:
			return <IconBulbOff24 size={size} color={color} />;
	}
};
