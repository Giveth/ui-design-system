import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconInfoFilled16 } from './InfoFilled16';
import { IconInfoFilled24 } from './InfoFilled24';
import { IconInfoFilled32 } from './InfoFilled32';

export const IconInfoFilled: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconInfoFilled16 color={color} />;
		case '24':
			return <IconInfoFilled24 color={color} />;
		case '32':
			return <IconInfoFilled32 color={color} />;
		default:
			return <IconInfoFilled24 size={size} color={color} />;
	}
};
