import styled from "styled-components";
import { IHeadingProps } from "./common";

export const H6 = styled.h6<IHeadingProps>`
    /* Heading/H6 | 500 */
    font-family: TeX Gyre Adventor;
    font-style: normal;
    font-weight: ${props => props.weight || 500};
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.005em;
`;