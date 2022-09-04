import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';
import { brandColors, neutralColors } from '../../common/colors';
import { ButtonText } from '../typography/ButtonText';
import { Loader, LoadingContainer } from './common';
import { IButtonContainerProps, IButtonProps } from './type';

const ButtonContainer = styled.button<IButtonContainerProps>`
	border: 0 solid;
	border-radius: 48px;
	padding: ${props => (props.size === 'large' ? '24px' : '16px')} 24px;
	transition: background 0.3s ease, color 0.3s ease;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4px;
	white-space: nowrap;
	${props => {
		if (props.disabled) {
			if (props.buttonType === 'texty') {
				return `color: ${brandColors.giv[500]};background: unset};padding: 8px 24px;opacity: 0.5;`;
			}
			if (props.buttonType === 'primary') {
				return `background: ${brandColors.pinky[300]};color: ${brandColors.pinky[200]};`;
			}
			return `color: ${brandColors.giv[400]};background: ${brandColors.giv[500]};opacity: 0.5;`;
		}
		switch (props.buttonType) {
			case 'primary':
				return `color: ${neutralColors.gray[100]};background: ${brandColors.pinky[500]};`;
			case 'secondary':
				return `color: ${neutralColors.gray[100]};background: ${brandColors.giv[500]};`;
			case 'texty':
				return `color: ${brandColors.deep[100]};background: unset};padding: 8px 24px;`;
			case 'texty-primary':
				return `color: ${brandColors.pinky[500]};background: unset};padding: 8px 24px;`;
			case 'texty-secondary':
				return `color: ${brandColors.giv[500]};background: unset};padding: 8px 24px;`;
			default:
				return `color: ${neutralColors.gray[100]};background: ${brandColors.pinky[500]};`;
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
				case 'texty-primary':
					return `color: ${neutralColors.gray[100]};background: ${brandColors.pinky[700]}};`;
				case 'texty-secondary':
					return `color: ${neutralColors.gray[100]};background: ${brandColors.giv[700]}};`;
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
	loading = false,
	onClick,
	icon,
	className,
	type = 'button',
}) => {
	return (
		<ButtonContainer
			buttonType={buttonType}
			size={size}
			disabled={disabled}
			onClick={onClick}
			className={className}
			type={type}
		>
			<LoadingContainer loading={+loading}>
				{loading && (
					<Loader buttonType={buttonType} disabled={disabled} />
				)}
			</LoadingContainer>
			<ButtonText size={size}>{label}</ButtonText>
			{icon && icon}
		</ButtonContainer>
	);
};
