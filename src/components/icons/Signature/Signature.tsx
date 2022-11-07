import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconSignature16 } from './Signature16';
import { IconSignature24 } from './Signature24';
import { IconSignature32 } from './Signature32';

export const IconSignature: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconSignature16 color={color} />;
		case '24':
			return <IconSignature24 color={color} />;
		case '32':
			return <IconSignature32 color={color} />;
		default:
			return <IconSignature24 size={size} color={color} />;
	}
};
