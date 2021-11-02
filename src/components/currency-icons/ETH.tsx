import React, { FC } from "react";
import { ICurrencyIconProps } from "./type";

export const IconETH: FC<ICurrencyIconProps> = ({ size = 16 }) => {
    const size16 = <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#fff"/><g clipPath="url(#a)" fill="#5326EC"><path d="m7.999 2-.079.282v8.198l.079.083 3.599-2.25L7.998 2Z" fillOpacity=".2"/><path d="M7.999 2 4.4 8.314l3.599 2.249V2Z"/><path d="m7.999 11.283-.044.057v2.92l.044.137L11.6 9.035l-3.601 2.248Z" fillOpacity=".4"/><path d="M7.999 14.397v-3.114L4.4 9.035l3.599 5.362ZM7.999 10.563l3.599-2.25-3.599-1.729v3.979Z"/><path d="m4.4 8.314 3.599 2.249V6.584L4.4 8.314Z" fillOpacity=".2"/></g><defs><clipPath id="a"><path fill="#fff" transform="translate(4.4 2)" d="M0 0h7.2v12.4H0z"/></clipPath></defs></svg>
    const size24 = <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#fff"/><g clipPath="url(#a)" fill="#5326EC"><path d="m11.998 3-.118.424V15.72l.118.124 5.399-3.374L11.998 3Z" fillOpacity=".2"/><path d="M11.998 3 6.6 12.47l5.398 3.374V3Z"/><path d="m11.998 16.925-.066.086v4.38l.066.205 5.402-8.043-5.402 3.372Z" fillOpacity=".4"/><path d="M11.998 21.596v-4.671L6.6 13.553l5.398 8.043ZM11.998 15.844l5.399-3.374-5.399-2.594v5.968Z"/><path d="m6.6 12.47 5.398 3.374V9.876L6.6 12.471Z" fillOpacity=".2"/></g><defs><clipPath id="a"><path fill="#fff" transform="translate(6.6 3)" d="M0 0h10.8v18.6H0z"/></clipPath></defs></svg> 
    const size32 = <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#fff"/><g clipPath="url(#a)" fill="#5326EC"><path d="m15.998 4-.157.565V20.96l.157.166 7.198-4.499L15.998 4Z" fillOpacity=".2"/><path d="M15.998 4 8.8 16.627l7.198 4.499V4Z"/><path d="m15.998 22.567-.089.114v5.84l.089.273L23.2 18.07l-7.202 4.497Z" fillOpacity=".4"/><path d="M15.998 28.794v-6.228L8.8 18.07l7.198 10.724ZM15.998 21.126l7.198-4.499-7.198-3.459v7.958Z"/><path d="m8.8 16.627 7.198 4.499v-7.958L8.8 16.628Z" fillOpacity=".2"/></g><defs><clipPath id="a"><path fill="#fff" transform="translate(8.8 4)" d="M0 0h14.4v24.8H0z"/></clipPath></defs></svg>
    const size40 = <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#fff"/><path d="m19.997 5-.196.706V26.2l.196.207 8.997-5.623L19.997 5Z" fill="#5326EC" fillOpacity=".2"/><path d="M19.997 5 11 20.784l8.997 5.623V5Z" fill="#5326EC"/><path d="m19.997 28.208-.11.143v7.3l.11.342L29 22.588l-9.003 5.62Z" fill="#5326EC" fillOpacity=".4"/><path d="M19.997 35.993v-7.785L11 22.588l8.997 13.405ZM19.997 26.407l8.998-5.623-8.998-4.324v9.947Z" fill="#5326EC"/><path d="m11 20.784 8.997 5.623V16.46L11 20.784Z" fill="#5326EC" fillOpacity=".2"/></svg>
    const size64 = <svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="32" fill="#fff"/><g clipPath="url(#a)" fill="#5326EC"><path d="m31.995 8-.314 1.13v32.79l.314.331 14.396-8.997L31.996 8Z" fillOpacity=".2"/><path d="M31.996 8 17.6 33.254l14.396 8.997V8Z"/><path d="m31.995 45.133-.177.228v11.68l.177.548L46.4 36.141l-14.405 8.992Z" fillOpacity=".4"/><path d="M31.996 57.589V45.133L17.6 36.14l14.396 21.448ZM31.996 42.251l14.395-8.996-14.395-6.919v15.915Z"/><path d="m17.6 33.255 14.395 8.996V26.336L17.6 33.255Z" fillOpacity=".2"/></g><defs><clipPath id="a"><path fill="#fff" transform="translate(17.6 8)" d="M0 0h28.8v49.6H0z"/></clipPath></defs></svg>
    switch (size.toString()) {
        case '16':
            return size16;
        case '24':
            return size24;
        case '32':
            return size32;
        case '40':
            return size40;
        case '64':
            return size64;
        default:
            return size16;
    }
}