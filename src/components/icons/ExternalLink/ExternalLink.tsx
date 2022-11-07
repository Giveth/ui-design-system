import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconExternalLink16 } from './ExternalLink16';
import { IconExternalLink24 } from './ExternalLink24';
import { IconExternalLink32 } from './ExternalLink32';

export const IconExternalLink: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconExternalLink16 color={color} />;
		case '24':
			return <IconExternalLink24 color={color} />;
		case '32':
			return <IconExternalLink32 color={color} />;
		default:
			return <IconExternalLink24 size={size} color={color} />;
	}
};
