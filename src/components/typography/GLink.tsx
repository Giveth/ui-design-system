import styled from 'styled-components';

export interface IGLinkProps {
	size?: 'Tiny' | 'Small' | 'Medium' | 'Big';
}

export const GLink = styled.a<IGLinkProps>`
	/* Link/Tiny */
	font-family: Red Hat Text;
	font-style: normal;
	font-weight: normal;
	${props => {
		switch (props.size) {
			case 'Tiny':
				return 'font-size: 10px;line-height: normal;';
			case 'Small':
				return 'font-size: 12px;line-height: normal;';
			case 'Medium':
				return 'font-size: 14px;line-height: 160%;';
			case 'Big':
				return 'font-size: 16px;line-height: normal;';
			default:
				return 'font-size: 14px;line-height: 160%;';
		}
	}}
`;
