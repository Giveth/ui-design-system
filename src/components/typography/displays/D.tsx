import styled from 'styled-components';

export const D = styled.div`
	/* Display/D1 */
	font-family: TeX Gyre Adventor, sans-serif;
	font-style: normal;
	font-weight: 700;
	letter-spacing: -0.04em;
	color: ${props => (props.color ? props.color : 'inherit')};
`;
