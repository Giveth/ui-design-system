import type { ReactNode, ComponentPropsWithoutRef } from 'react';
import { ButtonSize, ButtonStyleType } from '../buttonLinks/type';

export interface IButtonContainerProps {
	$buttonType?: ButtonStyleType;
	disabled?: boolean;
	size?: ButtonSize;
}

export interface IButtonProps extends ComponentPropsWithoutRef<'button'> {
	loading?: boolean;
	label: string;
	icon?: ReactNode;
	leftIcon?: ReactNode;
	buttonType?: ButtonStyleType;
	disabled?: boolean;
	size?: ButtonSize;
	id?: string;
}
