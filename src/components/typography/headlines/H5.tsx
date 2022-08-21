import styled from 'styled-components';
import { IHeadingProps } from './common';
import { mediaQueries } from '../../../common/deviceSize';

export const H5 = styled.h5<IHeadingProps>`
	/* Heading/H5 | 500 */
	font-family: TeX Gyre Adventor;
	font-style: normal;
	font-weight: ${props => props.weight || 500};
	font-size: 23px;
	line-height: normal;
	letter-spacing: -0.005em;
	margin-top: 0;
	margin-bottom: 0;
	${mediaQueries.tablet} {
		font-size: 25px;
	}
`;
