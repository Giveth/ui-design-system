import React, { FC } from "react";
import { IIconProps } from "../type";

export const IconArrowLeft: FC<IIconProps> = ({ size = 16, color='white' }) => {
    const size16 = <svg width="16" height="16" viewBox="0 0 16 16" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M12.3333 7.66667H3M3 7.66667L7.66667 12.3333M3 7.66667L7.66667 3" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    const size24 = <svg width="24" height="24" viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    const size32 = <svg width="32" height="32" viewBox="0 0 32 32" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M25.3333 16H6.66663M6.66663 16L16 25.3333M6.66663 16L16 6.66663" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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