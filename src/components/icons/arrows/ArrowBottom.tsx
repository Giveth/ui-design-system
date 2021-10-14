import React, { FC } from "react";
import { IIconProps } from "../type";

export const IconArrowBottom: FC<IIconProps> = ({ size = 16, color='white' }) => {
    const size16 = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.66667 3.00004L7.66667 12.3334M7.66667 12.3334L12.3333 7.66671M7.66667 12.3334L3 7.66671" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
    const size24 = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke={color} stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
    const size32 = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 6.66671V25.3334M16 25.3334L25.3334 16M16 25.3334L6.66669 16" stroke={color} stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
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