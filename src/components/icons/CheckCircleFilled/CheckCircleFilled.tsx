import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconCheckCircleFilled16 } from './CheckCircleFilled16';
import { IconCheckCircleFilled24 } from './CheckCircleFilled24';
import { IconCheckCircleFilled32 } from './CheckCircleFilled32';

export const IconCheckCircleFilled: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconCheckCircleFilled16 color={color} />;
		case '24':
			return <IconCheckCircleFilled24 color={color} />;
		case '32':
			return <IconCheckCircleFilled32 color={color} />;
		default:
			return <IconCheckCircleFilled24 size={size} color={color} />;
	}
};
