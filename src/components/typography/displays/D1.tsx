import styled from 'styled-components';
import { mediaQueries } from '../../../common/deviceSize';

export const D1 = styled.div`
	/* Display/D1 */
	font-family: TeX Gyre Adventor, sans-serif;
	font-style: normal;
	font-weight: 700;
	font-size: 5rem;
	line-height: 130%;
	letter-spacing: -0.04em;
	${mediaQueries.tablet} {
		font-size: 6.69rem;
	}
`;
