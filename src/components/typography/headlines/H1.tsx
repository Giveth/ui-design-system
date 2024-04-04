import styled from 'styled-components';
import { IHeadingProps } from './common';
import { mediaQueries } from '../../../common/deviceSize';

export const H1 = styled.h1<IHeadingProps>`
	/* Heading/H1 | 500 */
	font-family:
		TeX Gyre Adventor,
		sans-serif;
	font-style: normal;
	font-weight: ${props => props.weight || 500};
	font-size: 2.5rem;
	line-height: 130%;
	letter-spacing: -0.03em;
	margin-top: 0;
	margin-bottom: 0;
	color: ${props => (props.color ? props.color : 'inherit')};
	${mediaQueries.tablet} {
		font-size: 4.125rem;
	}
`;
