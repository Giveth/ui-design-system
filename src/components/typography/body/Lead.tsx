import styled from 'styled-components';

export interface ILeadProps {
	size?: 'medium' | 'large';
}

const fontSize = {
	medium: '1.25rem',
	large: '1.5rem',
};

export const Lead = styled.div<ILeadProps>`
	/* Body/Lead */
	font-family: Red Hat Text, sans-serif;
	font-style: normal;
	font-weight: normal;
	line-height: 150%;
	${props => {
		switch (props.size) {
			case 'medium':
				return `font-size: ${fontSize.medium};`;
			case 'large':
				return `font-size: ${fontSize.large};`;
			default:
				return `font-size: ${fontSize.medium};`;
		}
	}}
`;
