import { type CSSProperties } from 'react';
import styled, { css } from 'styled-components';

interface IFlexProps {
	$flexWrap?: boolean;
	$alignItems?: CSSProperties['alignItems'];
	$justifyContent?: CSSProperties['justifyContent'];
	$flexDirection?: CSSProperties['flexDirection'];
	gap?: string;
}

export const Flex = styled.div<IFlexProps>`
	display: flex;
	${props =>
		props.$flexDirection &&
		css`
			flex-direction: ${props.$flexDirection};
		`}
	${props =>
		props.$flexWrap &&
		css`
			flex-wrap: wrap;
		`}
	${props =>
		props.$alignItems &&
		css`
			align-items: ${props.$alignItems};
		`}
	${props =>
		props.$justifyContent &&
		css`
			justify-content: ${props.$justifyContent};
		`}
	${props =>
		props.gap &&
		css`
			gap: ${props.gap};
		`}
`;

interface IFlexCenter {
	gap?: string;
	direction?: CSSProperties['flexDirection'];
}

export const FlexCenter = styled.div<IFlexCenter>`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: ${props => props.gap};
	flex-direction: ${props => props.direction};
`;

export const FlexSpacer = styled.div`
	flex: 1;
`;
