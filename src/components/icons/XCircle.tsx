import React, { FC } from "react";
import { IIconProps } from "./type";

export const IconXCircle: FC<IIconProps> = ({ size = 16, color='white' }) => {
    const size16 = <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 5.99992L6.00004 9.99992M6.00004 5.99992L10 9.99992M14.6667 7.99992C14.6667 11.6818 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6818 1.33337 7.99992C1.33337 4.31802 4.31814 1.33325 8.00004 1.33325C11.6819 1.33325 14.6667 4.31802 14.6667 7.99992Z" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
    const size24 = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
    const size32 = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 12L12 20M12 12L20 20M29.3333 16C29.3333 23.3638 23.3638 29.3333 16 29.3333C8.6362 29.3333 2.66666 23.3638 2.66666 16C2.66666 8.63616 8.6362 2.66663 16 2.66663C23.3638 2.66663 29.3333 8.63616 29.3333 16Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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