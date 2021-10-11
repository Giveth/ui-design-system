export interface IButtonContainerProps {
    buttonType?: 'primary' | 'secondary' | 'texty';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
}

export interface IButtonProps extends IButtonContainerProps {
    label: string
}