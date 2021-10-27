import React, { FC } from "react";
import { brandColors } from "../../..";
import { IIconProps } from "./type";

export const IconGIVGarden: FC<IIconProps> = ({ size = 16, color=brandColors.mustard[500] }) => {
   
    const size24 = <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.274 12.41a1.23 1.23 0 1 1-2.127-1.234 1.23 1.23 0 0 1 2.127 1.235ZM7.253 2.25c.124.01.249.012.372.027 1.305.161 2.352.77 3.118 1.838.572.798.84 1.698.805 2.679-.039 1.134-.461 2.112-1.247 2.932-.007.008-.036.007-.044 0C9.232 8.703 8.208 7.68 7.185 6.655a.138.138 0 0 1-.036-.088c-.002-1.44-.003-2.878-.002-4.317h.106ZM2.25 7.247c.009.124.012.248.027.371.161 1.305.77 2.35 1.839 3.116.798.572 1.7.839 2.681.805 1.135-.04 2.114-.461 2.934-1.246.008-.008.008-.036 0-.044a2246.386 2246.386 0 0 0-3.073-3.07.138.138 0 0 0-.088-.037c-1.44-.001-2.88-.002-4.32-.001v.106ZM16.746 21.75c-.124-.008-.248-.011-.371-.026-1.306-.161-2.352-.77-3.118-1.838a4.238 4.238 0 0 1-.806-2.68c.04-1.133.462-2.111 1.247-2.931.008-.008.037-.008.044 0 1.025 1.022 2.05 2.046 3.073 3.07a.138.138 0 0 1 .036.09c.002 1.438.002 2.877.001 4.316h-.106ZM21.75 16.754c-.01-.124-.012-.248-.028-.371-.16-1.305-.77-2.35-1.838-3.116a4.245 4.245 0 0 0-2.681-.805c-1.136.04-2.114.461-2.935 1.246-.007.008-.007.036 0 .044 1.024 1.025 2.048 2.048 3.073 3.07a.138.138 0 0 0 .089.037c1.44.001 2.88.002 4.32.001v-.106ZM16.746 2.25c-.124.01-.248.012-.371.027-1.306.16-2.352.77-3.118 1.837a4.238 4.238 0 0 0-.806 2.68c.04 1.134.462 2.112 1.247 2.932.008.008.037.007.044 0 1.025-1.023 2.05-2.046 3.073-3.071a.138.138 0 0 0 .036-.089c.002-1.438.002-2.877.001-4.316h-.106ZM21.75 7.247c-.008.124-.011.248-.027.371-.16 1.305-.77 2.35-1.838 3.116-.799.572-1.7.839-2.681.805-1.136-.04-2.114-.461-2.935-1.246-.007-.008-.007-.037 0-.044 1.024-1.025 2.048-2.048 3.074-3.07a.139.139 0 0 1 .088-.037 2439 2439 0 0 1 4.32-.001v.106ZM7.254 21.75c.124-.01.249-.012.372-.027 1.305-.161 2.352-.77 3.118-1.838.572-.798.84-1.698.805-2.679-.039-1.134-.461-2.112-1.247-2.932-.007-.008-.036-.007-.044 0-1.025 1.023-2.049 2.046-3.072 3.071a.138.138 0 0 0-.036.088c-.002 1.44-.003 2.878-.002 4.317h.106ZM2.25 16.753c.009-.124.012-.248.027-.371.161-1.305.77-2.35 1.839-3.116a4.245 4.245 0 0 1 2.681-.805c1.135.04 2.114.461 2.934 1.246.008.008.008.037 0 .044a2275.148 2275.148 0 0 1-3.073 3.07.138.138 0 0 1-.088.037c-1.44.002-2.88.002-4.32.001v-.106Z" fill={color}/></svg>
    const size64 = <svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.397 33.095a3.278 3.278 0 0 1-3.895 1.458 3.28 3.28 0 0 1-2.193-3.531 3.277 3.277 0 0 1 3.035-2.842 3.281 3.281 0 0 1 3.383 2.419 3.284 3.284 0 0 1-.33 2.496ZM19.342 6.001c.33.023.663.031.99.072 3.482.428 6.272 2.05 8.315 4.899 1.526 2.128 2.238 4.529 2.148 7.145-.104 3.024-1.23 5.632-3.326 7.818-.019.02-.096.02-.117 0a5967.613 5967.613 0 0 1-8.193-8.189.368.368 0 0 1-.096-.236c-.005-3.836-.006-7.673-.004-11.51l.283.001ZM6 19.325c.024.33.032.662.072.99.43 3.478 2.053 6.266 4.903 8.307 2.13 1.526 4.533 2.238 7.15 2.147 3.027-.104 5.636-1.23 7.824-3.323.02-.02.02-.096 0-.117-2.729-2.732-5.46-5.46-8.195-8.187a.368.368 0 0 0-.236-.096C13.678 19.04 9.84 19.04 6 19.042v.282ZM44.655 58c-.33-.024-.662-.032-.99-.072-3.482-.429-6.272-2.051-8.315-4.9-1.526-2.127-2.238-4.529-2.148-7.144.104-3.025 1.231-5.633 3.326-7.819.02-.02.096-.02.117 0 2.734 2.727 5.465 5.457 8.193 8.19.059.064.093.147.096.235.005 3.837.006 7.673.004 11.51h-.283ZM57.996 44.676c-.023-.33-.03-.662-.071-.99-.429-3.479-2.053-6.267-4.903-8.308-2.13-1.526-4.532-2.237-7.15-2.147-3.027.104-5.636 1.23-7.824 3.323-.02.02-.02.097 0 .117 2.729 2.732 5.46 5.461 8.195 8.187.064.06.148.094.236.097 3.84.004 7.679.006 11.518.004v-.283ZM44.655 6c-.33.024-.662.032-.99.072-3.482.429-6.271 2.051-8.314 4.9-1.527 2.127-2.24 4.529-2.148 7.144.104 3.025 1.23 5.633 3.325 7.819.02.02.096.02.117 0 2.734-2.727 5.465-5.457 8.193-8.19a.368.368 0 0 0 .096-.235c.005-3.837.007-7.673.005-11.51h-.284ZM58 19.324c-.024.33-.032.662-.072.99-.43 3.479-2.053 6.267-4.903 8.308-2.13 1.526-4.532 2.237-7.15 2.147-3.027-.104-5.636-1.23-7.824-3.323-.02-.02-.02-.097 0-.117 2.729-2.732 5.46-5.461 8.195-8.187a.368.368 0 0 1 .236-.097c3.84-.004 7.679-.006 11.518-.004v.283ZM19.345 57.997c.33-.023.662-.031.99-.072 3.482-.428 6.271-2.05 8.314-4.899 1.527-2.127 2.24-4.529 2.148-7.144-.104-3.025-1.23-5.633-3.325-7.82-.02-.02-.097-.019-.117 0a5967.616 5967.616 0 0 0-8.193 8.19.368.368 0 0 0-.096.236 6494.16 6494.16 0 0 0-.005 11.51l.284-.001ZM6 44.674c.024-.33.032-.663.072-.99.43-3.48 2.053-6.267 4.903-8.308 2.13-1.526 4.533-2.237 7.15-2.147 3.027.104 5.636 1.23 7.824 3.323.02.02.02.096 0 .117-2.729 2.732-5.46 5.46-8.195 8.187a.368.368 0 0 1-.236.096c-3.84.005-7.679.007-11.518.005v-.283Z" fill={color}/></svg>
    
    switch (size.toString()) {
        case '24':
            return size24;
        case '64':
            return size64;
        default:
            return size64;
    }
}