import styled from 'styled-components';

export interface IOverlineProps {
	styleType?: 'Small' | 'Regular' | 'Italic';
}

export const Overline = styled.a<IOverlineProps>`
	/* Overline */
	font-family: Red Hat Text, sans-serif;
	line-height: 132%;
	${props => {
		switch (props.styleType) {
			case 'Small':
				return 'font-size: 0.625rem;font-style: normal;font-weight: 500;';
			case 'Regular':
				return 'font-size: 0.875rem;font-style: normal;font-weight: 500;';
			case 'Italic':
				return 'font-size: 0.875rem;font-style: italic;font-weight: normal;';
			default:
				return 'font-size: 0.875rem;font-style: normal;font-weight: 500;';
		}
	}}
`;
