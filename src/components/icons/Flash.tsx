import React, { FC } from "react";
import { IIconProps } from "./type";

export const IconFlash: FC<IIconProps> = ({ size = 16, color='white' }) => {
    const size16 = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0)">
    <path d="M13.6266 6.18002C13.6 6.12519 13.5582 6.07911 13.5062 6.04722C13.4543 6.01534 13.3943 5.99896 13.3333 6.00002H8.41331L9.65998 0.406683C9.68289 0.326982 9.67589 0.241654 9.64028 0.166758C9.60468 0.0918619 9.54292 0.0325613 9.46665 1.62311e-05C9.3962 -0.0309345 9.31721 -0.0365583 9.24309 -0.0159008C9.16896 0.00475667 9.10427 0.050423 9.05998 0.11335L2.39332 9.44668C2.36079 9.49865 2.34354 9.55871 2.34354 9.62002C2.34354 9.68132 2.36079 9.74139 2.39332 9.79335C2.41527 9.84973 2.45245 9.89891 2.50071 9.9354C2.54897 9.97189 2.60642 9.99426 2.66665 10H7.58665L6.33998 15.5933C6.31707 15.673 6.32407 15.7584 6.35968 15.8333C6.39529 15.9082 6.45704 15.9675 6.53332 16C6.60412 16.0285 6.68236 16.0329 6.75589 16.0124C6.82942 15.9919 6.89413 15.9477 6.93998 15.8867L13.6066 6.55335C13.6478 6.50065 13.6718 6.43659 13.6753 6.36983C13.6789 6.30307 13.6619 6.23681 13.6266 6.18002Z" fill={color}/>
    </g>
    <defs>
    <clipPath id="clip0">
    <rect width="16" height="16" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    
    const size24 = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.7366 9.49752C19.7 9.42212 19.6425 9.35877 19.5711 9.31493C19.4996 9.27108 19.4171 9.24856 19.3333 9.25002H12.5683L14.2825 1.55918C14.314 1.44959 14.3043 1.33227 14.2554 1.22928C14.2064 1.1263 14.1215 1.04476 14.0166 1.00001C13.9198 0.957457 13.8112 0.949725 13.7092 0.978129C13.6073 1.00653 13.5184 1.06932 13.4575 1.15585L4.2908 13.9892C4.24608 14.0606 4.22236 14.1432 4.22236 14.2275C4.22236 14.3118 4.24608 14.3944 4.2908 14.4658C4.32099 14.5434 4.37211 14.611 4.43847 14.6612C4.50483 14.7113 4.58382 14.7421 4.66664 14.75H11.4316L9.71747 22.4408C9.68597 22.5504 9.6956 22.6678 9.74456 22.7707C9.79352 22.8737 9.87842 22.9553 9.9833 23C10.0807 23.0392 10.1882 23.0452 10.2893 23.017C10.3904 22.9889 10.4794 22.9281 10.5425 22.8442L19.7091 10.0108C19.7657 9.93838 19.7987 9.8503 19.8036 9.7585C19.8085 9.66671 19.7851 9.57561 19.7366 9.49752Z" fill={color}/>
    </svg>
    
    const size32 = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.3155 12.6634C26.2666 12.5628 26.19 12.4784 26.0948 12.4199C25.9995 12.3614 25.8895 12.3314 25.7777 12.3334H16.7577L19.0433 2.07891C19.0853 1.93279 19.0725 1.77636 19.0072 1.63905C18.9419 1.50174 18.8287 1.39302 18.6889 1.33335C18.5597 1.27661 18.4149 1.2663 18.279 1.30417C18.1431 1.34204 18.0245 1.42577 17.9433 1.54113L5.72108 18.6522C5.66144 18.7475 5.62981 18.8576 5.62981 18.97C5.62981 19.0824 5.66144 19.1925 5.72108 19.2878C5.76132 19.3912 5.82948 19.4813 5.91796 19.5482C6.00644 19.6151 6.11177 19.6561 6.22219 19.6667H15.2422L12.9566 29.9211C12.9146 30.0672 12.9275 30.2237 12.9927 30.361C13.058 30.4983 13.1712 30.607 13.3111 30.6667C13.4409 30.719 13.5843 30.7269 13.7191 30.6894C13.8539 30.6518 13.9726 30.5708 14.0566 30.4589L26.2789 13.3478C26.3543 13.2512 26.3982 13.1337 26.4048 13.0113C26.4113 12.8889 26.3802 12.7675 26.3155 12.6634Z" fill={color}/>
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