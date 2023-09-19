import React, { FC } from 'react';
import { ISocialIconProps } from '../type';
import { IconXSocial18 } from './XSocial18';
import { IconXSocial24 } from './XSocial24';

export const IconXSocial: FC<ISocialIconProps> = ({
	size = 18,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '18':
			return <IconXSocial18 color={color} />;
		case '24':
			return <IconXSocial24 color={color} />;
		default:
			return <IconXSocial24 size={size} color={color} />;
	}
};
