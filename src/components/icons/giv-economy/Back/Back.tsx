import React, { FC } from 'react';
import { brandColors } from '../../../../common/colors';
import { IIconProps } from '../type';
import { IconGIVBack16 } from './Back16';
import { IconGIVBack24 } from './Back24';
import { IconGIVBack32 } from './Back32';
import { IconGIVBack64 } from './Back64';

export const IconGIVBack: FC<IIconProps> = ({
	size = 16,
	color = brandColors.mustard[500],
}) => {
	switch (size.toString()) {
		case '16':
			return <IconGIVBack16 color={color} />;
		case '24':
			return <IconGIVBack24 color={color} />;
		case '32':
			return <IconGIVBack32 color={color} />;
		case '64':
			return <IconGIVBack64 color={color} />;
		default:
			return <IconGIVBack32 size={size} color={color} />;
	}
};
