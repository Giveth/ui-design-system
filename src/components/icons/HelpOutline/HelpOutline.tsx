import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconHelpOutline16 } from './HelpOutline16';
import { IconHelpOutline24 } from './HelpOutline24';
import { IconHelpOutline32 } from './HelpOutline32';

export const IconHelpOutline: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconHelpOutline16 color={color} />;
		case '24':
			return <IconHelpOutline24 color={color} />;
		case '32':
			return <IconHelpOutline32 color={color} />;
		default:
			return <IconHelpOutline24 size={size} color={color} />;
	}
};
