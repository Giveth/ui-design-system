import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconPublish16 } from './Publish16';
import { IconPublish24 } from './Publish24';
import { IconPublish32 } from './Publish32';

export const IconPublish: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconPublish16 color={color} />;
		case '24':
			return <IconPublish24 color={color} />;
		case '32':
			return <IconPublish32 color={color} />;
		default:
			return <IconPublish24 size={size} color={color} />;
	}
};
