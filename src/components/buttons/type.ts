import type { ReactNode, ComponentPropsWithoutRef } from 'react';

export interface IButtonContainerProps {
	buttonType?:
		| 'primary'
		| 'secondary'
		| 'texty'
		| 'texty-gray'
		| 'texty-primary'
		| 'texty-secondary';
	disabled?: boolean;
	size?: 'small' | 'medium' | 'large';
}

export interface IButtonProps
	extends ComponentPropsWithoutRef<'button'>,
		IButtonContainerProps {
	loading?: boolean;
	label: string;
	icon?: ReactNode;
	leftIcon?: ReactNode;
}
