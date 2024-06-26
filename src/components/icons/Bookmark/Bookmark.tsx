import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconBookmark16 } from './Bookmark16';
import { IconBookmark24 } from './Bookmark24';
import { IconBookmark32 } from './Bookmark32';

export const IconBookmark: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconBookmark16 color={color} />;
		case '24':
			return <IconBookmark24 color={color} />;
		case '32':
			return <IconBookmark32 color={color} />;
		default:
			return <IconBookmark24 size={size} color={color} />;
	}
};
