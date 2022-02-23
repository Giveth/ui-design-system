import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';
import { brandColors, neutralColors } from '../../common/colors';
import { ButtonText } from '../typography/ButtonText';
import { IButtonContainerProps, IButtonProps } from './type';

const ButtonContainer = styled.button<IButtonContainerProps>`
	border: 0 solid;
	border-radius: 48px;
	padding: ${props => (props.size === 'large' ? '24px' : '16px')} 24px;
	transition: background 0.3s ease;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4px;
	white-space: nowrap;
	${props => {
		switch (props.buttonType) {
			case 'primary':
				return props.disabled
					? `color: ${brandColors.giv[400]};background: ${brandColors.giv[500]};opacity: 0.4;`
					: `color: ${neutralColors.gray[100]};background: ${brandColors.pinky[500]};`;
			case 'secondary':
				return props.disabled
					? `color: ${brandColors.giv[400]};background: ${brandColors.giv[500]};opacity: 0.4;`
					: `color: ${neutralColors.gray[100]};background: ${brandColors.giv[500]};`;
			case 'texty':
				return props.disabled
					? `color: ${brandColors.giv[500]};background: unset};padding: 8px 24px;opacity: 0.4;`
					: `color: ${brandColors.deep[100]};background: unset};padding: 8px 24px;`;
			default:
				return props.disabled
					? `color: ${brandColors.giv[400]};background: ${brandColors.giv[500]};opacity: 0.4;`
					: `color: ${neutralColors.gray[100]};background: ${brandColors.pinky[500]};`;
		}
	}}
	${props => (props.disabled ? '' : 'cursor: pointer;')}
  :hover {
		${props => {
			if (props.disabled) return '';
			switch (props.buttonType) {
				case 'primary':
					return `color: ${neutralColors.gray[100]};background: ${brandColors.pinky[600]};`;
				case 'secondary':
					return `color: ${neutralColors.gray[100]};background: ${brandColors.giv[700]};`;
				case 'texty':
					return `color: ${brandColors.deep[100]};background: ${brandColors.giv[700]}};`;
				default:
					return `color: ${brandColors.deep[100]};background: ${brandColors.giv[700]}};`;
			}
		}}
	}
`;

export const Button: FC<IButtonProps> = ({
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
			size={size}
			disabled={disabled}
			onClick={onClick}
			className={className}
		>
			<ButtonText size={size}>{label}</ButtonText>
			{icon && icon}
		</ButtonContainer>
	);
};
