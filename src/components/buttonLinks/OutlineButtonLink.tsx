import React, { forwardRef } from 'react';
import { FC } from 'react';
import styled, { css } from 'styled-components';
import { brandColors } from '../../common/colors';
import { ButtonText } from '../typography/ButtonText';
import { IButtonLinkContainerProps, IButtonLinkProps } from './type';

const ButtonLinkContainer = styled.span<IButtonLinkContainerProps>`
	border: 2px solid;
	border-radius: 48px;
	padding: ${props => (props.size === 'large' ? '22px' : '14px')} 24px;
	transition: color 0.3s ease, border-color 0.3s ease,
		background-color 0.3s ease;
	background-color: unset;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4px;
	white-space: nowrap;
	${props => {
		switch (props.$linkType) {
			case 'primary':
				return props.disabled
					? css`
							color: ${brandColors.giv[500]};
							border-color: ${brandColors.giv[500]};
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
					  `
					: css`
							color: ${brandColors.pinky[400]};
							border-color: ${brandColors.pinky[400]};
					  `;
		}
	}}
	${props => (props.disabled ? '' : 'cursor: pointer;')}
  &:hover {
		${props => {
			if (props.disabled) return '';
			switch (props.$linkType) {
				case 'primary':
					return css`
						color: ${brandColors.pinky[500]};
						border-color: ${brandColors.pinky[500]};
					`;
				case 'secondary':
					return css`
						color: ${brandColors.giv[500]};
						background-color: ${brandColors.giv['000']};
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

export const OutlineLinkButton: FC<IButtonLinkProps> = forwardRef(
	(
		{
			label,
			size = 'medium',
			linkType = 'secondary',
			disabled = false,
			icon,
			leftIcon,
			href,
			target,
			className,
			isExternal,
		},
		ref,
	) => {
		return (
			<ButtonLinkContainer
				ref={ref as any}
				href={href}
				target={target}
				$linkType={linkType}
				size={size}
				disabled={disabled}
				className={className}
				as={isExternal ? 'a' : 'span'}
			>
				<ButtonText as='span' size={size}>
					{leftIcon && leftIcon}
					{label}
					{icon && !leftIcon && icon}
				</ButtonText>
			</ButtonLinkContainer>
		);
	},
);

OutlineLinkButton.displayName = 'Outline Link Button';
