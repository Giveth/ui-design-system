import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconBookmarkFilled16 } from './BookmarkFilled16';
import { IconBookmarkFilled24 } from './BookmarkFilled24';
import { IconBookmarkFilled32 } from './BookmarkFilled32';

export const IconBookmarkFilled: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconBookmarkFilled16 color={color} />;
		case '24':
			return <IconBookmarkFilled24 color={color} />;
		case '32':
			return <IconBookmarkFilled32 color={color} />;
		default:
			return <IconBookmarkFilled24 size={size} color={color} />;
	}
};
