import styled from 'styled-components';

export interface ICaptionProps {
	$medium?: boolean;
}

export const Caption = styled.div<ICaptionProps>`
	/* Body/Caption */
	font-family: Red Hat Text, sans-serif;
	font-style: normal;
	font-weight: ${props => (props.$medium ? 500 : 400)};
	font-size: 0.875rem;
	line-height: 150%;
	color: ${props => (props.color ? props.color : 'inherit')};
`;
