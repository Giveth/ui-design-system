import styled from "styled-components";
import colors from "../common/colors";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Button = styled.button<ButtonProps>`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ?  colors.red :  colors.white};
  color: ${props => props.primary ? colors.white : colors.red};
  font-size: ${props => {
    switch (props.size) {
      case 'small':
        return '12px';
      case 'medium':
        return '14px';
      case 'large':
        return '16px';
      default:
        return '14px';
    }
  }};
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${colors.red};
  border-radius: 3px;
`;
