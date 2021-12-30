import React, { FC } from "react";
import { brandColors } from "../../..";
import { IIconProps } from "./type";

export const IconGIVBack: FC<IIconProps> = ({ size = 16, color=brandColors.mustard[500] }) => {
   
    const size24 = <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.019 6.883a1.561 1.561 0 0 0-1.413-.217.229.229 0 0 0-.15.209v4.277a.433.433 0 0 1-.128.307.441.441 0 0 1-.75-.307v-5.65a1.492 1.492 0 0 0-.631-1.226 1.562 1.562 0 0 0-1.44-.218.229.229 0 0 0-.15.209v5.58a.433.433 0 0 1-.128.308.441.441 0 0 1-.75-.307V3.763a1.522 1.522 0 0 0-.445-1.059 1.552 1.552 0 0 0-1.064-.454c-.177 0-.353.033-.518.096a.21.21 0 0 0-.14.2v7.302a.433.433 0 0 1-.13.307.441.441 0 0 1-.748-.307V5.5c0-.403-.162-.79-.45-1.075a1.544 1.544 0 0 0-2.173 0c-.288.285-.45.672-.45 1.075v8.693a.216.216 0 0 1-.155.212.222.222 0 0 1-.249-.09l-1.86-2.608a1.53 1.53 0 0 0-2.081-.308 1.492 1.492 0 0 0-.394 2.047l4.8 6.711c.26.374.607.68 1.012.893.405.212.857.323 1.315.324h4.39c1.454 0 2.85-.572 3.879-1.591a5.407 5.407 0 0 0 1.607-3.842V8.118a1.492 1.492 0 0 0-.606-1.235Zm-2.634 9.337-2.756 2.877a.45.45 0 0 1-.632 0l-2.792-2.877a2.042 2.042 0 0 1-.386-2.382c.136-.298.343-.558.603-.76.26-.2.565-.337.89-.396a2.092 2.092 0 0 1 1.808.582l.149.14.14-.14a2.084 2.084 0 0 1 1.818-.582c.327.05.637.178.904.373.266.196.48.452.623.748a2.043 2.043 0 0 1-.386 2.417h.017Z" fill={color}/></svg>
    const size64 = <svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M53.384 18.356a4.182 4.182 0 0 0-3.769-.58.608.608 0 0 0-.398.557v11.405c0 .308-.123.602-.343.82a1.176 1.176 0 0 1-1.655 0 1.154 1.154 0 0 1-.343-.82V14.67a3.978 3.978 0 0 0-.443-1.836 4.02 4.02 0 0 0-1.242-1.433 4.182 4.182 0 0 0-3.84-.58.608.608 0 0 0-.398.557v14.883c0 .307-.123.602-.342.82a1.176 1.176 0 0 1-1.656 0 1.153 1.153 0 0 1-.342-.82V10.034a4.06 4.06 0 0 0-1.19-2.823A4.14 4.14 0 0 0 34.586 6c-.472.002-.94.088-1.381.255a.561.561 0 0 0-.374.533v19.473c0 .307-.124.602-.343.82a1.177 1.177 0 0 1-1.656 0 1.154 1.154 0 0 1-.343-.82V14.67a4.037 4.037 0 0 0-1.2-2.869 4.117 4.117 0 0 0-2.896-1.188 4.117 4.117 0 0 0-2.897 1.188 4.037 4.037 0 0 0-1.2 2.869v23.182a.575.575 0 0 1-.414.565.59.59 0 0 1-.663-.24l-4.962-6.955a4.08 4.08 0 0 0-5.55-.822 4.007 4.007 0 0 0-1.635 2.52 3.979 3.979 0 0 0 .583 2.938L22.46 53.755a7.514 7.514 0 0 0 2.697 2.38 7.597 7.597 0 0 0 3.507.865h11.704c3.88 0 7.602-1.526 10.346-4.244a14.418 14.418 0 0 0 4.285-10.245V21.648a3.978 3.978 0 0 0-.406-1.84 4.018 4.018 0 0 0-1.21-1.452ZM46.36 43.253l-7.35 7.673a1.2 1.2 0 0 1-.843.348 1.132 1.132 0 0 1-.843-.348l-7.444-7.673a5.476 5.476 0 0 1-1.552-3.01 5.447 5.447 0 0 1 .522-3.342 5.41 5.41 0 0 1 1.607-2.025 5.48 5.48 0 0 1 2.373-1.058 5.577 5.577 0 0 1 2.601.197c.84.27 1.6.735 2.22 1.356l.399.371.374-.37a5.557 5.557 0 0 1 2.233-1.36 5.6 5.6 0 0 1 2.613-.194 5.46 5.46 0 0 1 2.41.996 5.39 5.39 0 0 1 1.663 1.995 5.447 5.447 0 0 1 .556 3.39 5.476 5.476 0 0 1-1.586 3.054h.047Z" fill={color}/></svg>
    
    switch (size.toString()) {
        case '24':
            return size24;
        case '64':
            return size64;
        default:
            return size64;
    }
}