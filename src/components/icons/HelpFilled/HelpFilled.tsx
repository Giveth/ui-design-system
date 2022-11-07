import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconHelpFilled16 } from './HelpFilled16';
import { IconHelpFilled24 } from './HelpFilled24';
import { IconHelpFilled32 } from './HelpFilled32';

export const IconHelpFilled: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconHelpFilled16 color={color} />;
		case '24':
			return <IconHelpFilled24 color={color} />;
		case '32':
			return <IconHelpFilled32 color={color} />;
		default:
			return <IconHelpFilled24 size={size} color={color} />;
	}
};
