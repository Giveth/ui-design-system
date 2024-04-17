import React, { FC } from 'react';
import { ISocialIconProps } from '../type';
import { IconWhatsApp18 } from './WhatsApp18';

export const IconWhatsApp: FC<ISocialIconProps> = ({
	size = 18,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '18':
			return <IconWhatsApp18 color={color} />;
		default:
			return <IconWhatsApp18 size={size} color={color} />;
	}
};
