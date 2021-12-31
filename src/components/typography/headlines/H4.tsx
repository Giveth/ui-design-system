import styled from "styled-components";
import { IHeadingProps } from "./common";

export const H4 = styled.h4<IHeadingProps>`
    /* Heading/H4 | 500 */
    font-family: TeX Gyre Adventor;
    font-style: normal;
    font-weight: ${props => props.weight || 500};
    font-size: 2rem;
    line-height: normal;
    letter-spacing: -0.01em;
    margin-top: 0;
    margin-bottom: 0;
`;