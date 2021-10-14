import React, { FC } from "react";
import { IIconProps } from "../type";

export const IconArrowCircleTop: FC<IIconProps> = ({ size = 16, color='white' }) => {
    const size16 = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.33331 7.99992L7.99998 5.33325M7.99998 5.33325L10.6666 7.99992M7.99998 5.33325L7.99998 10.6666M7.99998 14.6666C11.6819 14.6666 14.6666 11.6818 14.6666 7.99992C14.6666 4.31802 11.6819 1.33325 7.99998 1.33325C4.31808 1.33325 1.33331 4.31802 1.33331 7.99992C1.33331 11.6818 4.31808 14.6666 7.99998 14.6666Z" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>    
    
    const size24 = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 12L12 8M12 8L16 12M12 8V16M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={color} stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
    const size32 = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.6667 16L16 10.6666M16 10.6666L21.3334 16M16 10.6666V21.3333M16 29.3333C23.3638 29.3333 29.3334 23.3638 29.3334 16C29.3334 8.63616 23.3638 2.66663 16 2.66663C8.63622 2.66663 2.66669 8.63616 2.66669 16C2.66669 23.3638 8.63622 29.3333 16 29.3333Z" stroke={color} stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
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