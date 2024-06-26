import styled from 'styled-components';

export interface IButtonTextProps {
	size?: 'small' | 'medium' | 'large';
}

export const ButtonText = styled.span<IButtonTextProps>`
	font-family: Red Hat Text, sans-serif;
	font-style: normal;
	text-transform: capitalize;
	font-weight: 700;
	color: ${props => (props.color ? props.color : 'inherit')};
	${props => {
		switch (props.size) {
			case 'small':
				return 'font-size: 0.75rem;line-height: 133%;';
			case 'medium':
				return 'font-size: 0.875rem;line-height: 129%;';
			case 'large':
				return 'font-size: 1rem;line-height: 113%;';
			default:
				return 'font-size: 0.875rem;line-height: 129%;';
		}
	}}
`;
