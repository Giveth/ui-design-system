import React, { FC } from "react";
import { IIconProps } from "./type";

export const IconForward: FC<IIconProps> = ({ size = 16, color='white' }) => {
    const size16 = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 5L14.5 7L12.5 9M14 7H4.8125C2.97625 7 1.5 8.54156 1.5 10.375V11" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    const size24 = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.75 7.5L21.75 10.5L18.75 13.5M21 10.5H7.21875C4.46438 10.5 2.25 12.8123 2.25 15.5625V16.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    const size32 = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 10L29 14L25 18M28 14H9.625C5.9525 14 3 17.0831 3 20.75V22" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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