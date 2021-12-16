import React from "react";
import { FC } from "react";
import styled from "styled-components";
import { brandColors, neutralColors } from "../../common/colors";
import { ButtonText } from "../typography/ButtonText";
import { IButtonLinkContainerProps, IButtonLinkProps } from "./type";

const ButtonLinkContainer = styled.a<IButtonLinkContainerProps>`
  border: none;
  border-radius: 48px;
  padding: 16px 24px;
  transition: background .3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  ${props => {
    switch (props.linkType) {
        case 'primary':
            return props.disabled ? `color: ${brandColors.giv[400]};background: ${brandColors.giv[500]};` :`color: ${neutralColors.gray[100]};background: ${brandColors.pinky[500]};`
        case 'secondary':
            return props.disabled ? `color: ${brandColors.giv[400]};background: ${brandColors.giv[500]};` :`color: ${neutralColors.gray[100]};background: ${brandColors.giv[500]};`
        case 'texty':
            return props.disabled ? `color: ${brandColors.giv[500]};background: unset};padding: 8px 24px;` :`color: ${brandColors.deep[100]};background: unset};padding: 8px 24px;`
        default:
            return props.disabled ? `color: ${brandColors.giv[400]};background: ${brandColors.giv[500]};` :`color: ${neutralColors.gray[100]};background: ${brandColors.pinky[500]};`
    }
  }}
  ${props => props.disabled ? '' : 'cursor: pointer;'}
  :hover {
    ${props => {
      if (props.disabled) return '';
      switch (props.linkType) {
          case 'primary':
              return `color: ${neutralColors.gray[100]};background: ${brandColors.pinky[600]};`
          case 'secondary':
              return `color: ${neutralColors.gray[100]};background: ${brandColors.giv[700]};`
          case 'texty':
              return `color: ${brandColors.deep[100]};background: ${brandColors.giv[700]}};`
          default:
              return `color: ${brandColors.deep[100]};background: ${brandColors.giv[700]}};`
      }
    }}
  }
`;

export const ButtonLink: FC<IButtonLinkProps> = ({label, size = 'medium', linkType= 'secondary', disabled = false, icon, href, target, className }) => {
  return (
    <ButtonLinkContainer target={target} linkType={linkType} disabled={disabled} href={href} className={className}>
      <ButtonText as='span' size={size}>
        {label}
      </ButtonText>
      {icon && icon}
    </ButtonLinkContainer>
  );
}