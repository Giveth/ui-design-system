import { MouseEventHandler, ReactNode } from 'react';

export interface IButtonContainerProps {
	buttonType?: 'primary' | 'secondary' | 'texty';
	size?: 'small' | 'medium' | 'large';
	disabled?: boolean;
	loading?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	icon?: ReactNode;
	className?: string;
}

export interface IButtonProps extends IButtonContainerProps {
	label: string;
}
