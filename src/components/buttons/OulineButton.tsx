import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';
import { brandColors } from '../../common/colors';
import { ButtonText } from '../typography/ButtonText';
import { IButtonContainerProps, IButtonProps } from './type';

const ButtonContainer = styled.button<IButtonContainerProps>`
	border: 2px solid;
	border-radius: 48px;
	padding: ${props => (props.size === 'large' ? '22px' : '14px')} 24px;
	transition: color 0.3s ease, border-color 0.3s ease, background 0.3s ease;
	background: unset;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4px;
	white-space: nowrap;
	${props => {
		switch (props.buttonType) {
			case 'primary':
				return props.disabled
					? `color: ${brandColors.giv[500]};border-color: ${brandColors.giv[500]};opacity: 0.4;`
					: `color: ${brandColors.pinky[400]};border-color: ${brandColors.pinky[400]};`;
			case 'secondary':
				return props.disabled
					? `color: ${brandColors.giv[500]};border-color: ${brandColors.giv[500]};opacity: 0.4;`
					: `color: ${brandColors.giv['000']};border-color: ${brandColors.giv['000']};`;
			default:
				return props.disabled
					? `color: ${brandColors.giv[500]};border-color: ${brandColors.giv[500]};opacity: 0.4;`
					: `color: ${brandColors.pinky[400]};border-color: ${brandColors.pinky[400]};`;
		}
	}}
	${props => (props.disabled ? '' : 'cursor: pointer;')}
  :hover {
		${props => {
			if (props.disabled) return '';
			switch (props.buttonType) {
				case 'primary':
					return `color: ${brandColors.pinky[500]};border-color: ${brandColors.pinky[500]};`;
				case 'secondary':
					return `color: ${brandColors.giv[500]};background: ${brandColors.giv['000']};`;
				default:
					return `color: ${brandColors.pinky[500]};border-color: ${brandColors.pinky[500]};`;
			}
		}}
	}
`;

export const OulineButton: FC<IButtonProps> = ({
	label,
	size = 'medium',
	buttonType = 'secondary',
	disabled = false,
	onClick,
	icon,
	className,
}) => {
	return (
		<ButtonContainer
			buttonType={buttonType}
			disabled={disabled}
			onClick={onClick}
			className={className}
			size={size}
		>
			<ButtonText size={size}>
				{label}
				{icon && icon}
			</ButtonText>
		</ButtonContainer>
	);
};
