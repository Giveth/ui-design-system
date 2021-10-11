import styled from "styled-components";
import { IHeadingProps } from "./common";

export const H2 = styled.h2<IHeadingProps>`
    /* Heading/H2 | 500 */
    font-family: TeX Gyre Adventor;
    font-style: normal;
    font-weight: ${props => props.weight || 500};
    font-size: 52px;
    line-height: 76px;
    letter-spacing: -0.02em;
`;