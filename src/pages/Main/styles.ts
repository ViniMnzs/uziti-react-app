import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        height: auto;
        flex-direction: column;
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
        height: auto;
    }
`;
