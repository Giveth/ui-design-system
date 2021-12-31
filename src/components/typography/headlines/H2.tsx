import styled from "styled-components";
import { IHeadingProps } from "./common";

export const H2 = styled.h2<IHeadingProps>`
    /* Heading/H2 | 500 */
    font-family: TeX Gyre Adventor;
    font-style: normal;
    font-weight: ${props => props.weight || 500};
    font-size: 3.25rem;
    line-height: 130%;
    letter-spacing: -0.02em;
    margin-top: 0;
    margin-bottom: 0;
`;