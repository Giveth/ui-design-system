import React, { forwardRef } from 'react';
import { FC } from 'react';
import styled, { css } from 'styled-components';
import { brandColors, neutralColors } from '../../common/colors';
import { ButtonText } from '../typography/ButtonText';
import { IButtonLinkContainerProps, IButtonLinkProps } from './type';

const ButtonLinkContainer = styled.span<IButtonLinkContainerProps>`
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
		switch (props.$linkType) {
			case 'primary':
				return props.disabled
					? css`
							color: ${brandColors.giv[400]};
							background-color: ${brandColors.giv[500]};
					  `
					: css`
							color: ${neutralColors.gray[100]};
							background-color: ${brandColors.pinky[500]};
					  `;
			case 'secondary':
				return props.disabled
					? css`
							color: ${brandColors.giv[400]};
							background-color: ${brandColors.giv[500]};
					  `
					: css`
							color: ${neutralColors.gray[100]};
							background-color: ${brandColors.giv[500]};
					  `;
			case 'texty':
				return props.disabled
					? css`
							color: ${brandColors.giv[500]};
							background-color: unset;
							padding: 8px 24px;
					  `
					: css`
							color: ${brandColors.deep[100]};
							background-color: unset;
							padding: 8px 24px;
					  `;
			case 'texty-gray':
				return props.disabled
					? css`
							color: ${neutralColors.gray[500]};
							background-color: unset;
							padding: 8px 24px;
							opacity: 0.5;
					  `
					: css`
							color: ${neutralColors.gray[500]};
							background-color: unset;
							padding: 8px 24px;
					  `;
			case 'texty-primary':
				return props.disabled
					? css`
							color: ${brandColors.pinky[500]};
							background-color: unset;
							padding: 8px 24px;
							opacity: 0.5;
					  `
					: css`
							color: ${brandColors.pinky[500]};
							background-color: unset;
							padding: 8px 24px;
					  `;
			case 'texty-secondary':
				return props.disabled
					? css`
							color: ${brandColors.giv[500]};
							background-color: unset;
							padding: 8px 24px;
							opacity: 0.5;
					  `
					: css`
							color: ${brandColors.giv[500]};
							background-color: unset;
							padding: 8px 24px;
					  `;

			default:
				return props.disabled
					? css`
							color: ${brandColors.giv[400]};
							background-color: ${brandColors.giv[500]};
					  `
					: css`
							color: ${neutralColors.gray[100]};
							background-color: ${brandColors.pinky[500]};
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
			switch (props.$linkType) {
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
						color: ${neutralColors.gray[100]};
					`;
				case 'texty-secondary':
					return css`
						color: ${neutralColors.gray[100]};
					`;
				default:
					return css`
						color: ${brandColors.deep[100]};
					`;
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
			leftIcon,
			target,
			className,
			href,
			isExternal,
		},
		ref,
	) => {
		return (
			<ButtonLinkContainer
				ref={ref as any}
				href={href}
				as={isExternal ? 'a' : 'span'}
				target={target}
				$linkType={linkType}
				disabled={disabled}
				size={size}
				className={className}
			>
				{leftIcon && leftIcon}
				<ButtonText as='span' size={size}>
					{label}
				</ButtonText>
				{icon && !leftIcon && icon}
			</ButtonLinkContainer>
		);
	},
);

ButtonLink.displayName = 'Button Link';
