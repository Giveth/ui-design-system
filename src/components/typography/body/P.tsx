import styled from 'styled-components';

export const P = styled.div`
	/* Body/P */
	font-family:
		Red Hat Text,
		sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 1rem;
	line-height: 150%;
	color: ${props => (props.color ? props.color : 'inherit')};
`;
