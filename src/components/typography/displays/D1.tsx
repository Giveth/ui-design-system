import styled from 'styled-components';
import { mediaQueries } from '../../../common/deviceSize';
import { D } from './D';

export const D1 = styled(D)`
	/* Display/D1 */
	font-size: 5rem;
	line-height: 130%;
	${mediaQueries.tablet} {
		font-size: 6.69rem;
	}
`;
