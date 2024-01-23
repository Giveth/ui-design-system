import styled from 'styled-components';
import { IHeadingProps } from './common';
import { mediaQueries } from '../../../common/deviceSize';

export const H5 = styled.h5<IHeadingProps>`
	/* Heading/H5 | 500 */
	font-family: TeX Gyre Adventor, sans-serif;
	font-style: normal;
	font-weight: ${props => props.weight || 500};
	font-size: 1.44rem;
	line-height: normal;
	letter-spacing: -0.005em;
	margin-top: 0;
	margin-bottom: 0;
	color: ${props => (props.color ? props.color : 'inherit')};
	${mediaQueries.tablet} {
		font-size: 1.56rem;
	}
`;
