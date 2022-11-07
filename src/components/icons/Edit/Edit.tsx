import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconEdit16 } from './Edit16';
import { IconEdit24 } from './Edit24';
import { IconEdit32 } from './Edit32';

export const IconEdit: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconEdit16 color={color} />;
		case '24':
			return <IconEdit24 color={color} />;
		case '32':
			return <IconEdit32 color={color} />;
		default:
			return <IconEdit24 size={size} color={color} />;
	}
};
