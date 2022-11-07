import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconPointerLeft16 } from './PointerLeft16';
import { IconPointerLeft24 } from './PointerLeft24';
import { IconPointerLeft32 } from './PointerLeft32';

export const IconPointerLeft: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconPointerLeft16 color={color} />;
		case '24':
			return <IconPointerLeft24 color={color} />;
		case '32':
			return <IconPointerLeft32 color={color} />;
		default:
			return <IconPointerLeft24 size={size} color={color} />;
	}
};
