import React, { FC } from 'react';
import { ISocialIconProps } from '../type';
import { IconTelegram16 } from './Telegram16';

export const IconTelegram: FC<ISocialIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconTelegram16 color={color} />;
		default:
			return <IconTelegram16 size={size} color={color} />;
	}
};
