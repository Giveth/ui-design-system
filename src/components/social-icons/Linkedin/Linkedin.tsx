import React, { FC } from 'react';
import { ISocialIconProps } from '../type';
import { IconLinkedin18 } from './Linkedin18';
import { IconLinkedin24 } from './Linkedin24';

export const IconLinkedin: FC<ISocialIconProps> = ({
	size = 18,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '18':
			return <IconLinkedin18 color={color} />;
		case '24':
			return <IconLinkedin24 color={color} />;
		default:
			return <IconLinkedin24 size={size} color={color} />;
	}
};
