import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconCaretDown16 } from './CaretDown16';
import { IconCaretDown24 } from './CaretDown24';
import { IconCaretDown32 } from './CaretDown32';

export const IconCaretDown: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconCaretDown16 color={color} />;
		case '24':
			return <IconCaretDown24 color={color} />;
		case '32':
			return <IconCaretDown32 color={color} />;
		default:
			return <IconCaretDown24 size={size} color={color} />;
	}
};
