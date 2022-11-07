import React, { FC } from 'react';
import { IIconProps } from '../type';
import { IconVerificationReview16 } from './VerificationReview16';
import { IconVerificationReview24 } from './VerificationReview24';
import { IconVerificationReview32 } from './VerificationReview32';

export const IconVerificationReview: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	switch (size.toString()) {
		case '16':
			return <IconVerificationReview16 color={color} />;
		case '24':
			return <IconVerificationReview24 color={color} />;
		case '32':
			return <IconVerificationReview32 color={color} />;
		default:
			return <IconVerificationReview24 size={size} color={color} />;
	}
};
