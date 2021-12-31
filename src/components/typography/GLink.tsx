import styled from "styled-components";

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
                return 'font-size: 0.63rem;line-height: normal;'
            case 'Small':
                return 'font-size: 0.75rem;line-height: normal;'
            case 'Medium':
                return 'font-size: 0.88rem;line-height: 160%;'
            case 'Big':
                return 'font-size: 1rem;line-height: normal;'
            default:
                return 'font-size: 0.88rem;line-height: 160%;'
        }
    }}
`;