import type { ReactNode, ComponentPropsWithoutRef } from 'react';

export type ButtonStyleType =
	| 'primary'
	| 'secondary'
	| 'texty'
	| 'texty-gray'
	| 'texty-primary'
	| 'texty-secondary';

export type ButtonSize = 'small' | 'medium' | 'large';

export interface IButtonLinkContainerProps {
	$linkType?: ButtonStyleType;
	size?: ButtonSize;
	disabled?: boolean;
}

export interface IButtonLinkProps extends ComponentPropsWithoutRef<'a'> {
	icon?: ReactNode;
	leftIcon?: ReactNode;
	label: string;
	linkType?: ButtonStyleType;
	isExternal?: boolean;
	size?: ButtonSize;
	disabled?: boolean;
}
