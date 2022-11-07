import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconWalletOutline16 } from './WalletOutline16';
import { IconWalletOutline24 } from './WalletOutline24';
import { IconWalletOutline32 } from './WalletOutline32';

export const IconWalletOutline: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconWalletOutline16 color={color} />;
		case '24':
			return <IconWalletOutline24 color={color} />;
		case '32':
			return <IconWalletOutline32 color={color} />;
		default:
			return <IconWalletOutline24 size={size} color={color} />;
	}
};
