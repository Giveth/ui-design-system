import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconFingerprint32 } from './Fingerprint32';

export const IconFingerprint: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '32':
			return <IconFingerprint32 color={color} />;
		default:
			return <IconFingerprint32 size={size} color={color} />;
	}
};
