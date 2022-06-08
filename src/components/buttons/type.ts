import { MouseEventHandler, ReactNode } from 'react';

export interface IButtonContainerProps {
	buttonType?: 'primary' | 'secondary' | 'texty';
	size?: 'small' | 'medium' | 'large';
	disabled?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	icon?: ReactNode;
	className?: string;
}

export interface IButtonProps extends IButtonContainerProps {
	loading?: boolean;
	label: string;
}
