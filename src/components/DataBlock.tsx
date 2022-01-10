import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { Lead, SemiTitle, H3, Caption } from ".";
import { brandColors } from "../common/colors";

interface IDataBlockProps {
    title: string;
    subtitle?: string;
    icon?: ReactNode;
    children: ReactNode;
    button?: ReactNode;
    caption?: string;
    className?: string;
  }
  
  const DataBlockContainer = styled.div``;
  const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
  `;
  
  const DBSubtitle = styled(SemiTitle)`
    color: ${brandColors.deep[100]};
  `;
  
  const Body = styled(Lead)`
    margin: 24px 0;
  `;
  
  const DBCaption = styled(Caption)`
    color: ${brandColors.deep[100]};
    padding: 0 20px;
  `;
  
  export const DataBlock: FC<IDataBlockProps> = ({ title, icon, subtitle, children, button, caption, className }) => {
    return (
      <DataBlockContainer className={className}>
        <TitleContainer>
          <H3>{title}</H3>
          {icon && icon}
        </TitleContainer>
        {subtitle && <DBSubtitle color={brandColors.deep[100]}>{subtitle}</DBSubtitle>}
        <Body> {children} </Body>
        {button && button}
        <DBCaption>{caption}</DBCaption>
      </DataBlockContainer>
    );
  }