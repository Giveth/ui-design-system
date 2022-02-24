import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconInfo16 } from './Info16';
import { IconInfo24 } from './Info24';
import { IconInfo32 } from './Info32';

export const IconInfo: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconInfo16 color={color} />;
		case '24':
			return <IconInfo24 color={color} />;
		case '32':
			return <IconInfo32 color={color} />;
		default:
			return <IconInfo24 size={size} color={color} />;
	}
};
