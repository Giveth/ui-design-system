import styled from "styled-components";
import { brandColors } from "../../../common/colors";
import { IHeadingProps } from "./common";

export const H3 = styled.h3<IHeadingProps>`
    /* Heading/H3 | 500 */
    font-family: TeX Gyre Adventor;
    font-style: normal;
    font-weight: ${props => props.weight || 500};
    font-size: 41px;
    line-height: 60px;
    color: ${brandColors.deep[900]};
`;