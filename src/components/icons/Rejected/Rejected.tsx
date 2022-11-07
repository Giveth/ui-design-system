import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconRejected16 } from './Rejected16';
import { IconRejected24 } from './Rejected24';
import { IconRejected32 } from './Rejected32';

export const IconRejected: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconRejected16 color={color} />;
		case '24':
			return <IconRejected24 color={color} />;
		case '32':
			return <IconRejected32 color={color} />;
		default:
			return <IconRejected24 size={size} color={color} />;
	}
};
