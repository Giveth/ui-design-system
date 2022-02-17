import React, { FC } from 'react';
import { ISocialIconProps } from '../type';
import { IconDocs16 } from './Docs16';
import { IconDocs24 } from './Docs24';
import { IconDocs32 } from './Docs32';

export const DocsMenu: FC<ISocialIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconDocs16 color={color} />;
		case '24':
			return <IconDocs24 color={color} />;
		case '32':
			return <IconDocs32 color={color} />;
		default:
			return <IconDocs24 size={size} color={color} />;
	}
};
