import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconAlertTriangleFilled16 } from './AlertTriangleFilled16';
import { IconAlertTriangleFilled24 } from './AlertTriangleFilled24';
import { IconAlertTriangleFilled32 } from './AlertTriangleFilled32';

export const IconAlertTriangleFilled: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconAlertTriangleFilled16 color={color} />;
		case '24':
			return <IconAlertTriangleFilled24 color={color} />;
		case '32':
			return <IconAlertTriangleFilled32 color={color} />;
		default:
			return <IconAlertTriangleFilled24 size={size} color={color} />;
	}
};
