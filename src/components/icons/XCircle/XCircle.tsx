import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconXCircle16 } from './XCircle16';
import { IconXCircle24 } from './XCircle24';
import { IconXCircle32 } from './XCircle32';

export const IconXCircle: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconXCircle16 color={color} />;
		case '24':
			return <IconXCircle24 color={color} />;
		case '32':
			return <IconXCircle32 color={color} />;
		default:
			return <IconXCircle24 size={size} color={color} />;
	}
};
