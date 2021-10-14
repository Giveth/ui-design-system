export interface IButtonContainerProps {
    buttonType?: 'primary' | 'secondary' | 'texty';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    onClick?: Function;
}

export interface IButtonProps extends IButtonContainerProps {
    label: string
}