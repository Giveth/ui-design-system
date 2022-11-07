import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconFormSubmit16 } from './FormSubmit16';
import { IconFormSubmit24 } from './FormSubmit24';
import { IconFormSubmit32 } from './FormSubmit32';

export const IconFormSubmit: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconFormSubmit16 color={color} />;
		case '24':
			return <IconFormSubmit24 color={color} />;
		case '32':
			return <IconFormSubmit32 color={color} />;
		default:
			return <IconFormSubmit24 size={size} color={color} />;
	}
};
