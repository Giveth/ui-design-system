import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconCheckboxFilled16 } from './CheckboxFilled16';
import { IconCheckboxFilled24 } from './CheckboxFilled24';
import { IconCheckboxFilled32 } from './CheckboxFilled32';

export const IconCheckboxFilled: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconCheckboxFilled16 color={color} />;
		case '24':
			return <IconCheckboxFilled24 color={color} />;
		case '32':
			return <IconCheckboxFilled32 color={color} />;
		default:
			return <IconCheckboxFilled24 size={size} color={color} />;
	}
};
