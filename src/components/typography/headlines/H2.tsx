import styled from 'styled-components';
import { IHeadingProps } from './common';
import { mediaQueries } from '../../../common/deviceSize';

export const H2 = styled.h2<IHeadingProps>`
	/* Heading/H2 | 500 */
	font-family:
		TeX Gyre Adventor,
		sans-serif;
	font-style: normal;
	font-weight: ${props => props.weight || 500};
	font-size: 2.25rem;
	line-height: 130%;
	letter-spacing: -0.02em;
	margin-top: 0;
	margin-bottom: 0;
	color: ${props => (props.color ? props.color : 'inherit')};
	${mediaQueries.tablet} {
		font-size: 3.25rem;
	}
`;
