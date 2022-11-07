import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconCaretLeft16 } from './CaretLeft16';
import { IconCaretLeft24 } from './CaretLeft24';
import { IconCaretLeft32 } from './CaretLeft32';

export const IconCaretLeft: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconCaretLeft16 color={color} />;
		case '24':
			return <IconCaretLeft24 color={color} />;
		case '32':
			return <IconCaretLeft32 color={color} />;
		default:
			return <IconCaretLeft24 size={size} color={color} />;
	}
};
