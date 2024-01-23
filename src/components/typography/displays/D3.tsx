import styled from 'styled-components';
import { mediaQueries } from '../../../common/deviceSize';

export const D3 = styled.div`
	/* Display/D3 */
	font-family: TeX Gyre Adventor, sans-serif;
	font-style: normal;
	font-weight: 700;
	font-size: 4.25rem;
	line-height: 120%;
	letter-spacing: -0.04em;
	color: ${props => (props.color ? props.color : 'inherit')};
	${mediaQueries.tablet} {
		font-size: 5.5rem;
	}
`;
