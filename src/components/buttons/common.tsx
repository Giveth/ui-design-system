import styled from 'styled-components';
import { brandColors } from '../../common/colors';
import { rotate } from '../../styled-components/animations';
import { IButtonContainerProps } from './type';

export const LoadingContainer = styled.div<{ loading: number }>`
	position: relative;
	transition: width 0.3s ease;
	width: ${props => (props.loading ? '16px' : 0)};
`;

export const Loader = styled.div<IButtonContainerProps>`
	border: 3px solid
		${props => {
			if (props.disabled) {
				switch (props.$buttonType) {
					case 'primary':
						return brandColors.pinky[400];
				}
			}
			switch (props.$buttonType) {
				case 'primary':
					return brandColors.pinky[600];
				case 'secondary':
					return brandColors.giv[600];
				case 'texty':
					return brandColors.giv[500];
				default:
					return brandColors.giv[500];
			}
		}};
	border-radius: 50%;
	border-top: 3px solid white;
	width: 12px;
	height: 12px;
	animation: ${rotate} 1s ease infinite;
	position: absolute;
	top: -8px;
	left: -8px;
`;
