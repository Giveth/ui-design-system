import React from 'react';
import { FC } from 'react';
import styled, { css } from 'styled-components';
import { brandColors, neutralColors } from '../../common/colors';
import { ButtonText } from '../typography/ButtonText';
import { Loader, LoadingContainer } from './common';
import { IButtonContainerProps, IButtonProps } from './type';

const ButtonContainer = styled.button<IButtonContainerProps>`
	border: 0 solid;
	border-radius: 48px;
	padding: ${props => (props.size === 'large' ? '24px' : '16px')} 24px;
	transition: background-color 0.3s ease, color 0.3s ease, opacity 0.3s ease;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4px;
	white-space: nowrap;
	user-select: none;
	${props => {
		if (props.disabled) {
			if (props.$buttonType === 'texty') {
				return css`
					color: ${brandColors.giv[500]};
					background-color: unset;
					padding: 8px 24px;
					opacity: 0.5;
				`;
			}
			if (props.$buttonType === 'texty-gray') {
				return css`
					color: ${neutralColors.gray[300]};
					background-color: unset;
					padding: 8px 24px;
					opacity: 0.5;
				`;
			}
			if (props.$buttonType === 'texty-primary') {
				return css`
					color: ${brandColors.pinky[500]};
					background-color: unset;
					padding: 8px 24px;
					opacity: 0.5;
				`;
			}
			if (props.$buttonType === 'texty-secondary') {
				return css`
					color: ${brandColors.giv[500]};
					background-color: unset;
					padding: 8px 24px;
					opacity: 0.5;
				`;
			}
			if (props.$buttonType === 'primary') {
				return css`
					background-color: ${brandColors.pinky[300]};
					color: ${brandColors.pinky[200]};
				`;
			}
			return css`
				color: ${brandColors.giv[400]};
				background-color: ${brandColors.giv[500]};
				opacity: 0.5;
			`;
		}
		switch (props.$buttonType) {
			case 'primary':
				return css`
					color: ${neutralColors.gray[100]};
					background-color: ${brandColors.pinky[500]};
				`;
			case 'secondary':
				return css`
					color: ${neutralColors.gray[100]};
					background-color: ${brandColors.giv[500]};
				`;
			case 'texty':
				return css`
					color: ${brandColors.deep[100]};
					background-color: unset;
					padding: 8px 24px;
				`;
			case 'texty-gray':
				return css`
					color: ${neutralColors.gray[500]};
					background-color: unset;
					padding: 8px 24px;
				`;
			case 'texty-primary':
				return css`
					color: ${brandColors.pinky[500]};
					background-color: unset;
					padding: 8px 24px;
				`;
			case 'texty-secondary':
				return css`
					color: ${brandColors.giv[500]};
					background-color: unset;
					padding: 8px 24px;
				`;
			default:
				return css`
					color: ${neutralColors.gray[100]};
					background-color: ${brandColors.pinky[500]};
				`;
		}
	}}
	${props => (props.disabled ? '' : 'cursor: pointer;')}
  :hover {
		${props => {
			if (props.disabled) return '';
			switch (props.$buttonType) {
				case 'primary':
					return css`
						color: ${neutralColors.gray[100]};
						background-color: ${brandColors.pinky[600]};
					`;
				case 'secondary':
					return css`
						color: ${neutralColors.gray[100]};
						background-color: ${brandColors.giv[700]};
					`;
				case 'texty':
					return css`
						color: ${brandColors.deep[100]};
						background-color: ${brandColors.giv[700]};
					`;
				case 'texty-gray':
					return css`
						color: ${neutralColors.gray[700]};
					`;
				case 'texty-primary':
					return css`
						color: ${brandColors.pinky[700]};
					`;
				case 'texty-secondary':
					return css`
						color: ${brandColors.giv[700]};
					`;
				default:
					return css`
						color: ${brandColors.deep[100]};
						background-color: ${brandColors.giv[700]};
					`;
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
	leftIcon,
	className,
	type = 'button',
}) => {
	return (
		<ButtonContainer
			$buttonType={buttonType}
			size={size}
			disabled={disabled}
			onClick={onClick}
			className={className}
			type={type}
		>
			<LoadingContainer loading={+loading}>
				{loading && (
					<Loader $buttonType={buttonType} disabled={disabled} />
				)}
			</LoadingContainer>
			{leftIcon && leftIcon}
			<ButtonText size={size}>{label}</ButtonText>
			{icon && !leftIcon && icon}
		</ButtonContainer>
	);
};
