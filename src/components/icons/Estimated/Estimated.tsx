import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconEstimated16 } from './Estimated16';
import { IconEstimated24 } from './Estimated24';
import { IconEstimated32 } from './Estimated32';

export const IconEstimated: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconEstimated16 color={color} />;
		case '24':
			return <IconEstimated24 color={color} />;
		case '32':
			return <IconEstimated32 color={color} />;
		default:
			return <IconEstimated24 size={size} color={color} />;
	}
};
