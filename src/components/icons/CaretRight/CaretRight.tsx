import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconCaretRight16 } from './CaretRight16';
import { IconCaretRight24 } from './CaretRight24';
import { IconCaretRight32 } from './CaretRight32';

export const IconCaretRight: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconCaretRight16 color={color} />;
		case '24':
			return <IconCaretRight24 color={color} />;
		case '32':
			return <IconCaretRight32 color={color} />;
		default:
			return <IconCaretRight24 size={size} color={color} />;
	}
};
