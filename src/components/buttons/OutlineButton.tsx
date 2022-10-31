import React from 'react';
import { FC } from 'react';
import styled, { css } from 'styled-components';
import { brandColors } from '../../common/colors';
import { ButtonText } from '../typography/ButtonText';
import { Loader, LoadingContainer } from './common';
import { IButtonContainerProps, IButtonProps } from './type';

const ButtonContainer = styled.button<IButtonContainerProps>`
	border: 2px solid;
	border-radius: 48px;
	padding: ${props => (props.size === 'large' ? '22px' : '14px')} 24px;
	transition: color 0.3s ease, border-color 0.3s ease,
		background-color 0.3s ease;
	background: unset;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4px;
	white-space: nowrap;
	user-select: none;
	${props => {
		switch (props.buttonType) {
			case 'primary':
				return props.disabled
					? css`
							color: ${brandColors.pinky[300]};
							border-color: ${brandColors.pinky[300]};
					  `
					: css`
							color: ${brandColors.pinky[400]};
							border-color: ${brandColors.pinky[400]};
					  `;
			case 'secondary':
				return props.disabled
					? css`
							color: ${brandColors.giv[500]};
							border-color: ${brandColors.giv[500]};
							opacity: 0.4;
					  `
					: css`
							color: ${brandColors.giv['000']};
							border-color: ${brandColors.giv['000']};
					  `;
			default:
				return props.disabled
					? css`
							color: ${brandColors.giv[500]};
							border-color: ${brandColors.giv[500]};
							opacity: 0.4;
					  `
					: css`
							color: ${brandColors.pinky[400]};
							border-color: ${brandColors.pinky[400]};
					  `;
		}
	}}
	${props =>
		props.disabled
			? ''
			: css`
					cursor: pointer;
			  `}
  :hover {
		${props => {
			if (props.disabled) return '';
			switch (props.buttonType) {
				case 'primary':
					return css`
						color: ${brandColors.pinky[500]};
						border-color: ${brandColors.pinky[500]};
					`;
				case 'secondary':
					return css`
						color: ${brandColors.giv[500]};
						background: ${brandColors.giv['000']};
					`;
				default:
					return css`
						color: ${brandColors.pinky[500]};
						border-color: ${brandColors.pinky[500]};
					`;
			}
		}}
	}
`;

export const OutlineButton: FC<IButtonProps> = ({
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
			disabled={disabled}
			onClick={onClick}
			className={className}
			size={size}
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
