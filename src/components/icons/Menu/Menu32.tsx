import React, { FC } from "react";
import { IIconProps } from "../type";

export const IconMenu32: FC<IIconProps> = ({ size = 32, color='currentColor' }) => <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18M3 6h18M3 18h18" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>