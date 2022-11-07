import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconWalletApprove16 } from './WalletApprove16';
import { IconWalletApprove24 } from './WalletApprove24';
import { IconWalletApprove32 } from './WalletApprove32';

export const IconWalletApprove: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconWalletApprove16 color={color} />;
		case '24':
			return <IconWalletApprove24 color={color} />;
		case '32':
			return <IconWalletApprove32 color={color} />;
		default:
			return <IconWalletApprove24 size={size} color={color} />;
	}
};
