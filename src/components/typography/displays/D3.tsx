import styled from 'styled-components';
import { mediaQueries } from '../../../common/deviceSize';
import { D } from './D';

export const D3 = styled(D)`
	/* Display/D3 */
	font-size: 4.25rem;
	line-height: 120%;
	${mediaQueries.tablet} {
		font-size: 5.5rem;
	}
`;
