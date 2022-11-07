import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconClaim16 } from './Claim16';
import { IconClaim24 } from './Claim24';
import { IconClaim32 } from './Claim32';

export const IconClaim: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconClaim16 color={color} />;
		case '24':
			return <IconClaim24 color={color} />;
		case '32':
			return <IconClaim32 color={color} />;
		default:
			return <IconClaim24 size={size} color={color} />;
	}
};
