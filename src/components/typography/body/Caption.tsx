import styled from 'styled-components';

export interface ICaptionProps {
	medium?: boolean;
}

export const Caption = styled.div<ICaptionProps>`
	/* Body/Caption */
	font-family: Red Hat Text;
	font-style: normal;
	font-weight: ${props => (props.medium ? 500 : 400)};
	font-size: 14px;
	line-height: 150%;
`;
