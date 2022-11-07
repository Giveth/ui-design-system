import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconArrowLeft16 } from './ArrowLeft16';
import { IconArrowLeft24 } from './ArrowLeft24';
import { IconArrowLeft32 } from './ArrowLeft32';

export const IconArrowLeft: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconArrowLeft16 color={color} />;
		case '24':
			return <IconArrowLeft24 color={color} />;
		case '32':
			return <IconArrowLeft32 color={color} />;
		default:
			return <IconArrowLeft24 size={size} color={color} />;
	}
};
