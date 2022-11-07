import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconStar16 } from './Star16';
import { IconStar24 } from './Star24';
import { IconStar32 } from './Star32';

export const IconStar: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconStar16 color={color} />;
		case '24':
			return <IconStar24 color={color} />;
		case '32':
			return <IconStar32 color={color} />;
		default:
			return <IconStar24 size={size} color={color} />;
	}
};
