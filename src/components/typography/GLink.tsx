import styled from 'styled-components';

export interface IGLinkProps {
	size?: 'Tiny' | 'Small' | 'Medium' | 'Big';
}

export const GLink = styled.span<IGLinkProps>`
	font-family: Red Hat Text, sans-serif;
	font-style: normal;
	font-weight: normal;
	display: inline-block;
	color: ${props => (props.color ? props.color : 'inherit')};
	${props => {
		switch (props.size) {
			case 'Tiny':
				return 'font-size: 0.625rem;line-height: 132%;';
			case 'Small':
				return 'font-size: 0.75rem;line-height: 132%;';
			case 'Medium':
				return 'font-size: 0.875rem;line-height: 157%;';
			case 'Big':
				return 'font-size: 1rem;line-height: 132%;';
			default:
				return 'font-size: 0.875rem;line-height: 157%;';
		}
	}}
`;
