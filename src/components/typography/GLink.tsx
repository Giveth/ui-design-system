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
                return 'font-size: 10px;line-height: 13px;'
            case 'Small':
                return 'font-size: 12px;line-height: 16px;'
            case 'Medium':
                return 'font-size: 14px;line-height: 22px;'
            case 'Big':
                return 'font-size: 16px;line-height: 21px;'
            default:
                break;
        }
    }}
`;