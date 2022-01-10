import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding-right: 32px;
    padding-left: 32px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 768px) {
        max-width: 768px;
    }

    @media (min-width: 1024px) {
        max-width: 1024px;
    }

    @media (min-width: 1280px) {
        max-width: 1280px;
    }

    /* @media (min-width: 1440px) {
        max-width: 1440px;
    } */
`;