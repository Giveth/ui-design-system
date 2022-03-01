import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconShare16 } from './Share16';
import { IconShare24 } from './Share24';
import { IconShare32 } from './Share32';

export const IconShare: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconShare16 color={color} />;
		case '24':
			return <IconShare24 color={color} />;
		case '32':
			return <IconShare32 color={color} />;
		default:
			return <IconShare24 size={size} color={color} />;
	}
};
