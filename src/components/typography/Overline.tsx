import styled from "styled-components";

export interface IOverlineProps {
    styleType?: 'Small' | 'Regular' | 'Italic';
}

export const Overline = styled.a<IOverlineProps>`
    /* Overline */
    font-family: Red Hat Text;
    ${props => {
        switch (props.styleType) {
            case 'Small':
                return 'font-size: 10px;line-height: 13px;font-style: normal;font-weight: 500;'
            case 'Regular':
                return 'font-size: 14px;line-height: 19px;font-style: normal;font-weight: 500;'
            case 'Italic':
                return 'font-size: 14px;line-height: 19px;font-style: italic;font-weight: normal;'
            default:
                break;
        }
    }}
`;