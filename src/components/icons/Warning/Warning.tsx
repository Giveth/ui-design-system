import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconWarning16 } from './Warning16';
import { IconWarning24 } from './Warning24';
import { IconWarning32 } from './Warning32';

export const IconWarning: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconWarning16 color={color} />;
		case '24':
			return <IconWarning24 color={color} />;
		case '32':
			return <IconWarning32 color={color} />;
		default:
			return <IconWarning24 size={size} color={color} />;
	}
};
