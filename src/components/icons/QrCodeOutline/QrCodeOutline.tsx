import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconQrCodeOutline16 } from './QrCodeOutline16';
import { IconQrCodeOutline24 } from './QrCodeOutline24';
import { IconQrCodeOutline32 } from './QrCodeOutline32';

export const IconQrCodeOutline: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconQrCodeOutline16 color={color} />;
		case '24':
			return <IconQrCodeOutline24 color={color} />;
		case '32':
			return <IconQrCodeOutline32 color={color} />;
		default:
			return <IconQrCodeOutline24 size={size} color={color} />;
	}
};
