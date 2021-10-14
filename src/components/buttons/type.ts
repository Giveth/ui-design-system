import { MouseEventHandler } from "react";

export interface IButtonContainerProps {
    buttonType?: 'primary' | 'secondary' | 'texty';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface IButtonProps extends IButtonContainerProps {
    label: string
}