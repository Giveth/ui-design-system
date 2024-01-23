import styled from 'styled-components';
import { IHeadingProps } from './common';
import { mediaQueries } from '../../../common/deviceSize';

export const H3 = styled.h3<IHeadingProps>`
	/* Heading/H3 | 500 */
	font-family: TeX Gyre Adventor, sans-serif;
	font-style: normal;
	font-weight: ${props => props.weight || 500};
	font-size: 2rem;
	line-height: 130%;
	margin-top: 0;
	margin-bottom: 0;
	color: ${props => (props.color ? props.color : 'inherit')};
	${mediaQueries.tablet} {
		font-size: 2.56rem;
	}
`;
