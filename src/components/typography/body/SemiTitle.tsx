import styled from 'styled-components';

export const SemiTitle = styled.div`
	/* Body/SEMI-TITLE */
	font-family:
		Red Hat Text,
		sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 1rem;
	line-height: 150%;
	text-transform: uppercase;
	color: ${props => (props.color ? props.color : 'inherit')};
`;
