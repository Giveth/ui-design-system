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
                return 'font-size: 1.5rem;line-height: normal;'
            case 'medium':
                return 'font-size: 1.75rem;line-height: 134%;'
            case 'large':
                return 'font-size: 2rem;line-height: 134%;'
            default:
                return 'font-size: 1.75rem;line-height: 134%;'
        }
    }}
`;