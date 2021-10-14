import React from "react";
import { FC } from "react";
import styled from "styled-components";
import { brandColors, neutralColors } from "../../common/colors";
import { ButtonText } from "../typography/ButtonText";
import { IButtonContainerProps, IButtonProps } from "./type";

const ButtonContainer = styled.button<IButtonContainerProps>`
  border: none;
  border-radius: 48px;
  padding: 16px 24px;
  cursor: pointer;
  transition: background .3s ease;
  ${props => {
    switch (props.buttonType) {
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
  :hover {
    ${props => {
      if (props.disabled) return '';
      switch (props.buttonType) {
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



export const Button: FC<IButtonProps> = ({label, size = 'medium', buttonType= 'secondary', disabled = false, onClick }) => {
  return (
    <ButtonContainer buttonType={buttonType} disabled={disabled} onClick={onClick}>
      <ButtonText size={size}>
        {label}
      </ButtonText>
    </ButtonContainer>
  );
}