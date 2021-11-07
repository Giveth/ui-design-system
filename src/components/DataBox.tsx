import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { Lead, H4 } from ".";

interface IDataBoxProps {
    title: string;
    children: ReactNode;
    button: ReactNode;
    className?: string;
  }
  
  const DataBoxContainer = styled.div`
    padding: 24px 24px 60px;
  `;

  const Title = styled(H4)`
    margin-bottom: 18px;
  `;
  
  const Body = styled(Lead)`
    margin-bottom: 16px;
  `;
  
  export const DataBox: FC<IDataBoxProps> = ({ title,children, button, className }) => {
    return (
      <DataBoxContainer className={className}>
        <Title>{title}</Title>
        <Body> {children} </Body>
        {button}
      </DataBoxContainer>
    );
  }