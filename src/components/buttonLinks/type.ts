import { MouseEventHandler, ReactNode } from 'react';

export interface IButtonLinkContainerProps {
	linkType?: 'primary' | 'secondary' | 'texty';
	size?: 'small' | 'medium' | 'large';
	disabled?: boolean;
	icon?: ReactNode;
	className?: string;
	onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export interface IButtonLinkProps extends IButtonLinkContainerProps {
	label: string;
	href?: string;
	target?: string;
}
