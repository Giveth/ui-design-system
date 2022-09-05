import type { ReactNode, ComponentPropsWithoutRef } from 'react';

export interface IButtonLinkContainerProps {
	linkType?:
		| 'primary'
		| 'secondary'
		| 'texty'
		| 'texty-primary'
		| 'texty-secondary';
	size?: 'small' | 'medium' | 'large';
	disabled?: boolean;
}

export interface IButtonLinkProps
	extends ComponentPropsWithoutRef<'a'>,
		IButtonLinkContainerProps {
	icon?: ReactNode;
	label: string;
}
