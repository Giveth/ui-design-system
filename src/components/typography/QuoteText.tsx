import styled from 'styled-components';

export interface IQuoteTextProps {
	size?: 'small' | 'medium' | 'large';
}

export const QuoteText = styled.div<IQuoteTextProps>`
	/* QuoteText */
	font-family: Red Hat Text, sans-serif;
	font-weight: normal;
	font-style: normal;
	line-height: 134%;
	color: ${props => (props.color ? props.color : 'inherit')};
	${props => {
		switch (props.size) {
			case 'small':
				return 'font-size: 1.5rem;';
			case 'medium':
				return 'font-size: 1.75rem;';
			case 'large':
				return 'font-size: 2rem;';
			default:
				return 'font-size: 1.75rem;';
		}
	}}
`;
