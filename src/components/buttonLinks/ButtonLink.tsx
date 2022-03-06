import React, { forwardRef } from 'react';
import { FC } from 'react';
import styled from 'styled-components';
import { brandColors, neutralColors } from '../../common/colors';
import { ButtonText } from '../typography/ButtonText';
import { IButtonLinkContainerProps, IButtonLinkProps } from './type';

const ButtonLinkContainer = styled.a<IButtonLinkContainerProps>`
	border: none;
	border-radius: 48px;
	padding: ${props => (props.size === 'large' ? '24px' : '16px')} 24px;
	transition: background-color 0.3s ease;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4px;
	white-space: nowrap;
	${props => {
		switch (props.linkType) {
			case 'primary':
				return props.disabled
					? `color: ${brandColors.giv[400]};background-color: ${brandColors.giv[500]};`
					: `color: ${neutralColors.gray[100]};background-color: ${brandColors.pinky[500]};`;
			case 'secondary':
				return props.disabled
					? `color: ${brandColors.giv[400]};background-color: ${brandColors.giv[500]};`
					: `color: ${neutralColors.gray[100]};background-color: ${brandColors.giv[500]};`;
			case 'texty':
				return props.disabled
					? `color: ${brandColors.giv[500]};background-color: unset};padding: 8px 24px;`
					: `color: ${brandColors.deep[100]};background-color: unset};padding: 8px 24px;`;
			default:
				return props.disabled
					? `color: ${brandColors.giv[400]};background-color: ${brandColors.giv[500]};`
					: `color: ${neutralColors.gray[100]};background-color: ${brandColors.pinky[500]};`;
		}
	}}
	${props => (props.disabled ? '' : 'cursor: pointer;')}
  :hover {
		${props => {
			if (props.disabled) return '';
			switch (props.linkType) {
				case 'primary':
					return `color: ${neutralColors.gray[100]};background-color: ${brandColors.pinky[600]};`;
				case 'secondary':
					return `color: ${neutralColors.gray[100]};background-color: ${brandColors.giv[700]};`;
				case 'texty':
					return `color: ${brandColors.deep[100]};background-color: ${brandColors.giv[700]}};`;
				default:
					return `color: ${brandColors.deep[100]};background-color: ${brandColors.giv[700]}};`;
			}
		}}
	}
`;

export const ButtonLink: FC<IButtonLinkProps> = forwardRef(
	(
		{
			label,
			size = 'medium',
			linkType = 'secondary',
			disabled = false,
			icon,
			target,
			className,
			href,
			onClick,
		},
		ref,
	) => {
		return (
			<ButtonLinkContainer
				ref={ref as any}
				href={href}
				onClick={onClick}
				target={target}
				linkType={linkType}
				disabled={disabled}
				size={size}
				className={className}
			>
				<ButtonText as='span' size={size}>
					{label}
				</ButtonText>
				{icon && icon}
			</ButtonLinkContainer>
		);
	},
);

ButtonLink.displayName = 'Button Link';
