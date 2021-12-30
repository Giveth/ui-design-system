import React, { FC } from "react";
import { IIconProps } from "../type";

export const IconArrowCircleRight: FC<IIconProps> = ({ size = 16, color='currentColor' }) => {
    const size16 = <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.99996 5.33325L10.6666 7.99992M10.6666 7.99992L7.99996 10.6666M10.6666 7.99992L5.33329 7.99992M1.33329 7.99992C1.33329 11.6818 4.31806 14.6666 7.99996 14.6666C11.6819 14.6666 14.6666 11.6818 14.6666 7.99992C14.6666 4.31802 11.6819 1.33325 7.99996 1.33325C4.31806 1.33325 1.33329 4.31802 1.33329 7.99992Z" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
    const size24 = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8L16 12M16 12L12 16M16 12H8M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
    const size32 = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 10.6666L21.3333 16M21.3333 16L16 21.3333M21.3333 16H10.6666M2.66665 16C2.66665 23.3638 8.63618 29.3333 16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.63616 23.3638 2.66663 16 2.66663C8.63618 2.66663 2.66665 8.63616 2.66665 16Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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