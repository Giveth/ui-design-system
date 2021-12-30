import React, { FC } from "react";
import { IIconProps } from "../type";

export const IconPointerLeft: FC<IIconProps> = ({ size = 16, color='currentColor' }) => {
    const size16 = <svg width="17" height={size} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.2 7.75H1.70001M1.70001 7.75L5.45001 11.5M1.70001 7.75L5.45001 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>    

    const size24 = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.25 12.4971H0.75M0.75 12.4971L4.5 16.2471M0.75 12.4971L4.5 8.74707" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
    const size32 = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M31 16.6627H1M1 16.6627L6 21.6627M1 16.6627L6 11.6627" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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