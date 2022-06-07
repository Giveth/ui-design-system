import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';
import { brandColors, neutralColors } from '../../common/colors';
import { rotate } from '../../styled-components/animations';
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
					? `color: ${brandColors.giv[400]};background: ${brandColors.giv[500]};opacity: 0.5;`
					: `color: ${neutralColors.gray[100]};background: ${brandColors.pinky[500]};`;
			case 'secondary':
				return props.disabled
					? `color: ${brandColors.giv[400]};background: ${brandColors.giv[500]};opacity: 0.5;`
					: `color: ${neutralColors.gray[100]};background: ${brandColors.giv[500]};`;
			case 'texty':
				return props.disabled
					? `color: ${brandColors.giv[500]};background: unset};padding: 8px 24px;opacity: 0.5;`
					: `color: ${brandColors.deep[100]};background: unset};padding: 8px 24px;`;
			default:
				return props.disabled
					? `color: ${brandColors.giv[400]};background: ${brandColors.giv[500]};opacity: 0.5;`
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

const LoadingContainer = styled.div<{ loading: boolean }>`
	position: relative;
	transition: width 0.3s ease;
	width: ${props => (props.loading ? '16px' : 0)};
`;

const Loader = styled.div<IButtonContainerProps>`
	border: 3px solid
		${props => {
			if (props.disabled) return brandColors.giv[600];

			switch (props.buttonType) {
				case 'primary':
					return brandColors.pinky[600];
				case 'secondary':
					return brandColors.giv[600];
				case 'texty':
					return brandColors.giv[500];
				default:
					return brandColors.giv[500];
			}
		}};
	border-radius: 50%;
	border-top: 3px solid white;
	width: 12px;
	height: 12px;
	animation: ${rotate} 1s ease infinite;
	position: absolute;
	top: -8px;
	left: -8px;
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
}) => {
	return (
		<ButtonContainer
			buttonType={buttonType}
			size={size}
			disabled={disabled}
			onClick={onClick}
			className={className}
		>
			<LoadingContainer loading={loading}>
				{loading && (
					<Loader buttonType={buttonType} disabled={disabled} />
				)}
			</LoadingContainer>
			<ButtonText size={size}>{label}</ButtonText>
			{icon && icon}
		</ButtonContainer>
	);
};
