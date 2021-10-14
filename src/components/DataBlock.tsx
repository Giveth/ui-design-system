import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { Lead, SemiTitle, H3, Button, Caption } from ".";
import { brandColors } from "..";

interface IDataBlockProps {
    title: string;
    subtitle?: string;
    icon?: ReactNode;
    children: React.ReactNode;
    actionLabel?: string;
    type?: 'primary' | 'secondary' | 'texty';
    ActionCb?: Function;
    caption?: string;
  }
  
  const DataBlockContainer = styled.div``;
  const TitleContainer = styled.div`
    display: flex;
    align-items: center;
  `;
  
  const DBSubtitle = styled(SemiTitle)`
    color: ${brandColors.deep[100]}
  `;
  
  const Body = styled(Lead)`
    margin: 24px 0;
  `;
  
  const DBButton = styled(Button)`
    display: block;
    width: 200px;
  `;
  
  const DBCaption = styled(Caption)`
    color: ${brandColors.deep[100]};
    padding: 0 20px;
  `;
  
  export const DataBlock: FC<IDataBlockProps> = ({ title, icon, subtitle, children, actionLabel, type, ActionCb, caption }) => {
    return (
      <DataBlockContainer>
        <TitleContainer>
          <H3>{title}</H3>
          {icon && icon}
        </TitleContainer>
        {subtitle && <DBSubtitle color={brandColors.deep[100]}>{subtitle}</DBSubtitle>}
        <Body> {children} </Body>
        {actionLabel && ActionCb && <DBButton label={actionLabel} buttonType={type} onClick={ActionCb} />}
        <DBCaption>{caption}</DBCaption>
      </DataBlockContainer>
    );
  }