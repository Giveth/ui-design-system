import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconCheckboxEmpty16 } from './CheckboxEmpty16';
import { IconCheckboxEmpty24 } from './CheckboxEmpty24';
import { IconCheckboxEmpty32 } from './CheckboxEmpty32';

export const IconCheckboxEmpty: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconCheckboxEmpty16 color={color} />;
		case '24':
			return <IconCheckboxEmpty24 color={color} />;
		case '32':
			return <IconCheckboxEmpty32 color={color} />;
		default:
			return <IconCheckboxEmpty24 size={size} color={color} />;
	}
};
