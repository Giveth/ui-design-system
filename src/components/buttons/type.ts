import { ReactNode } from 'react';

export interface IButtonContainerProps {
	buttonType?:
		| 'primary'
		| 'secondary'
		| 'texty'
		| 'texty-primary'
		| 'texty-secondary';
	disabled?: boolean;
	size?: 'small' | 'medium' | 'large';
}

export interface IButtonProps
	extends React.ComponentPropsWithoutRef<'button'>,
		IButtonContainerProps {
	loading?: boolean;
	label: string;
	icon?: ReactNode;
}
