import React, { FC } from "react";
import { IIconProps } from "./type";

export const IconTransfer: FC<IIconProps> = ({ size = 16, color='white' }) => {
    const size16 = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 6.57143H13L9.42857 3M13 9.42857H3L6.57143 13" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
    const size24 = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 10H19L14 5M19 14H5L10 19" stroke={color} stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
    const size32 = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.66666 13.3334H25.3333L18.6667 6.66669M25.3333 18.6667H6.66666L13.3333 25.3334" stroke={color} stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>    
    
    switch (size.toString()) {
        case '16':
            return size16;
        case '24':
            return size24;
        case '32':
            return size32;
        default:
            return size16;
    }
}