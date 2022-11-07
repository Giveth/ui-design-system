import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconCaretUp16 } from './CaretUp16';
import { IconCaretUp24 } from './CaretUp24';
import { IconCaretUp32 } from './CaretUp32';

export const IconCaretUp: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconCaretUp16 color={color} />;
		case '24':
			return <IconCaretUp24 color={color} />;
		case '32':
			return <IconCaretUp32 color={color} />;
		default:
			return <IconCaretUp24 size={size} color={color} />;
	}
};
