import styled from "styled-components";

export interface IQuoteTextProps {
    size?: 'small' | 'medium' | 'large';
}

export const QuoteText = styled.div<IQuoteTextProps>`
    /* QuoteText */
    font-family: Red Hat Text;
    font-weight: normal;
    font-style: normal;
    ${props => {
        switch (props.size) {
            case 'small':
                return 'font-size: 24px;line-height: 32px;'
            case 'medium':
                return 'font-size: 28px;line-height: 38px;'
            case 'large':
                return 'font-size: 32px;line-height: 42px;'
            default:
                return 'font-size: 28px;line-height: 38px;'
        }
    }}
`;