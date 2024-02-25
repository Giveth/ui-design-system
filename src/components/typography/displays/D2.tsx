import styled from 'styled-components';
import { mediaQueries } from '../../../common/deviceSize';
import { D } from './D';

export const D2 = styled(D)`
	/* Display/D2 */
	font-size: 4.625rem;
	line-height: 130%;
	${mediaQueries.tablet} {
		font-size: 6.06rem;
	}
`;
