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
`;

export const DataBlock:FC<IDataBlockProps> = ({ title, icon, subtitle, children, actionLabel, type, ActionCb, caption}) => {
    return (
        <DataBlockContainer>
            <TitleContainer>
                <H3>{title}</H3>
                {icon && icon}
            </TitleContainer>
            {subtitle && <SemiTitle color={brandColors.deep[100]}>{subtitle}</SemiTitle>}
            <Lead> {children} </Lead>
            {actionLabel && ActionCb && <Button label={actionLabel} buttonType={type} onClick={()=>{ActionCb()}}/>}
            <Caption>{caption}</Caption>
        </DataBlockContainer>
    );

}