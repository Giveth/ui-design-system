import styled from 'styled-components';
import { IHeadingProps } from './common';

export const H1 = styled.h1<IHeadingProps>`
	/* Heading/H1 | 500 */
	font-family: TeX Gyre Adventor;
	font-style: normal;
	font-weight: ${props => props.weight || 500};
	font-size: 4.13rem;
	line-height: 130%;
	letter-spacing: -0.03em;
	margin-top: 0;
	margin-bottom: 0;
`;
