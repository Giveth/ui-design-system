import styled from 'styled-components';
import { IHeadingProps } from './common';

export const H6 = styled.h6<IHeadingProps>`
	/* Heading/H6 | 500 */
	font-family: TeX Gyre Adventor, sans-serif;
	font-style: normal;
	font-weight: ${props => props.weight || 500};
	font-size: 1.125rem;
	line-height: normal;
	letter-spacing: -0.005em;
	margin-top: 0;
	margin-bottom: 0;
`;
