import React from "react";
import { FC } from "react";
import styled from "styled-components";
import { brandColors } from "../../common/colors";
import { ButtonText } from "../typography/ButtonText";
import { IButtonLinkContainerProps, IButtonLinkProps } from "./type";

const ButtonContainer = styled.a<IButtonLinkContainerProps>`
  border: 2px solid;
  border-radius: 48px;
  padding: 14px 22px;
  transition: color .3s ease, border-color .3s ease, background .3s ease;
  background: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  ${props => {
    switch (props.linkType) {
        case 'primary':
            return props.disabled ? `color: ${brandColors.giv[500]};border-color: ${brandColors.giv[500]};` :`color: ${brandColors.pinky[400]};border-color: ${brandColors.pinky[400]};`
        case 'secondary':
            return props.disabled ? `color: ${brandColors.giv[500]};border-color: ${brandColors.giv[500]};` :`color: ${brandColors.giv['000']};border-color: ${brandColors.giv['000']};`
        default:
            return props.disabled ? `color: ${brandColors.giv[500]};border-color: ${brandColors.giv[500]};` :`color: ${brandColors.pinky[400]};border-color: ${brandColors.pinky[400]};`
    }
  }}
  ${props => props.disabled ? '' : 'cursor: pointer;'}
  :hover {
    ${props => {
      if (props.disabled) return '';
      switch (props.linkType) {
          case 'primary':
              return `color: ${brandColors.pinky[500]};border-color: ${brandColors.pinky[500]};`
          case 'secondary':
              return `color: ${brandColors.giv[500]};background: ${brandColors.giv['000']};`
          default:
            return `color: ${brandColors.pinky[500]};border-color: ${brandColors.pinky[500]};`
      }
    }}
  }
`;



export const OulineButton: FC<IButtonLinkProps> = ({label, size = 'medium', linkType= 'secondary', disabled = false, icon, href, className }) => {
  return (
    <ButtonContainer linkType={linkType} disabled={disabled} href={href} className={className}>
      <ButtonText size={size}>
        {label}
        {icon && icon}
      </ButtonText>
    </ButtonContainer>
  );
}