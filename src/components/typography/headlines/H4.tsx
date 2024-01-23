import styled from 'styled-components';
import { IHeadingProps } from './common';
import { mediaQueries } from '../../../common/deviceSize';

export const H4 = styled.h4<IHeadingProps>`
	/* Heading/H4 | 500 */
	font-family: TeX Gyre Adventor, sans-serif;
	font-style: normal;
	font-weight: ${props => props.weight || 500};
	font-size: 1.75rem;
	line-height: normal;
	letter-spacing: -0.01em;
	margin-top: 0;
	margin-bottom: 0;
	color: ${props => (props.color ? props.color : 'inherit')};
	${mediaQueries.tablet} {
		font-size: 2rem;
	}
`;
