import styled from "styled-components";
import { IHeadingProps } from "./common";

export const H5 = styled.h5<IHeadingProps>`
    /* Heading/H5 | 500 */
    font-family: TeX Gyre Adventor;
    font-style: normal;
    font-weight: ${props => props.weight || 500};
    font-size: 25px;
    line-height: 36px;
    letter-spacing: -0.005em;
    margin-top: 0;
    margin-bottom: 0;
`;