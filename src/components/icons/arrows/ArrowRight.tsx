import React, { FC } from "react";
import { IIconProps } from "../type";

export const IconArrowRight: FC<IIconProps> = ({ size = 16, color='white' }) => {
    const size16 = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.99998 7.66667H12.3333M12.3333 7.66667L7.66665 12.3333M12.3333 7.66667L7.66665 3" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    

    const size24 = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 19M19 12L12 5" stroke={color} stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

    const size32 = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.66665 16H25.3333M25.3333 16L16 25.3333M25.3333 16L16 6.66663" stroke={color} stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
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