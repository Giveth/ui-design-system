import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconPassport16 } from './Passport16';
import { IconPassport24 } from './Passport24';
import { IconPassport32 } from './Passport32';

export const IconPassport: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconPassport16 color={color} />;
		case '24':
			return <IconPassport24 color={color} />;
		case '32':
			return <IconPassport32 color={color} />;
		default:
			return <IconPassport24 size={size} color={color} />;
	}
};
